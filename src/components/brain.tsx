import data from "./data.json";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from 'three';

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const path = data.economics[0].paths;
const clock = new THREE.Clock();




interface OneCurveProps {
  curve: THREE.Curve<THREE.Vector3>;
  index: number;
  xScale: number;
  yScale: number;
  zScale: number;
}

interface BrainProps {
  x_Scale: number;
  y_Scale: number;
  z_Scale: number;
  position: THREE.Vector3; 
}
const position = new THREE.Vector3(2, 0, 0); // no affect by changing here 



1
function OneCurve({ curve, index, xScale, yScale, zScale  } : OneCurveProps) {


  const materialRef = useRef<THREE.ShaderMaterial>();
  const meshRef = useRef<THREE.Mesh>(null!);



  useFrame(({ mouse, viewport }) => {
    let time = clock.getElapsedTime();
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = time;
      materialRef.current.uniforms.mouse_v.value = new THREE.Vector3(
        mouse.x * viewport.width / 2,
        mouse.y * viewport.height / 2,
        0
      );
    }

    if (meshRef.current) {
      
      meshRef.current.rotation.y += 0.002; 
    }
  });

  return (
    <mesh key={index} scale={[xScale, yScale,zScale]} ref={meshRef} >
      <tubeGeometry args={[curve, 3400, 0.0006, 8, false]} wireframe={true} />
      <shaderMaterial
        uniforms={materialRef.current?.uniforms}
        vertexShader={`
          uniform float time;
          varying vec2 vUv;
          varying float vProgress;
          uniform vec3 mouse_v;

          void main() {
            vUv = uv;
            vec3 p = position;
            float maxDist = 0.05;
            float dist = length(mouse_v - p);
          
            if (dist < maxDist) {
              vec3 distortion = 0.5 * normalize(mouse_v - p);
              distortion *= (1.0 - dist / maxDist);
              p -= distortion * 0.03;
            }
            vProgress = smoothstep(-1.0, 1.0, sin(vUv.x * 8.0 + time * 3.8));
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `}
        fragmentShader={`
          float gamma = 2.1;
          uniform float time;
          varying float vProgress;
          varying vec2 vUv;

          vec3 simpleReinhardToneMapping(vec3 color) {
            float exposure = 1.5;
            color *= exposure / (1.0 + color / exposure);
            color = pow(color, vec3(1.0 / gamma));
            return color;
          }

          vec3 whitePreservingLumaBasedReinhardToneMapping(vec3 color) {
            float white = 2.0;
            float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
            float toneMappedLuma = luma * (1.0 + luma / (white * white)) / (1.0 + luma);
            color *= toneMappedLuma / luma;
            color = pow(color, vec3(1.0 / gamma));
            return color;
          }

          void main() {
            float normalSine = 0.5 + 0.5 * sin(time);
            float hidecorners = smoothstep(1.0, 0.9, vUv.x);
            float hidecorners1 = smoothstep(0.0, 0.9, vUv.x);
            vec3 color1 = vec3(0.5, 0.06, 0.35);
            vec3 color2 = vec3(6.0, 0.1, 0.03 * normalSine);
            vec3 finalColor = mix(color1 * 0.35, color2, vProgress);
            vec3 finalColor1 = whitePreservingLumaBasedReinhardToneMapping(finalColor);
            gl_FragColor = vec4(finalColor1, hidecorners * hidecorners1);
          }
        `}
        side={THREE.DoubleSide}
        depthTest={true}
        depthWrite={false}
        transparent={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

interface BrainProps {
  x_Scale: number;
  y_Scale: number;
  z_Scale: number;
}

export default function Brain({ x_Scale, y_Scale, z_Scale, position }: BrainProps) {
  let curves: THREE.Curve<THREE.Vector3>[] = [];
  for (let k = 0; k < path.length; k++) {
    let tube = path[k];
    let points = [];
    for (let i = 0; i < tube.length; i = i + 3) {
      points.push(new THREE.Vector3(tube[i], tube[i + 1], tube[i + 2]));
    }
    const curve = new THREE.CatmullRomCurve3(points);
    curves.push(curve);
  }

  return (
    <group position={position}>
      {curves.map((curve, index) => (
        <OneCurve curve={curve} index={index} key={index} xScale={x_Scale} yScale={y_Scale} zScale={z_Scale} />
      ))}
    </group>
  );
}

