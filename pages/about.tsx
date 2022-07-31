import React, { useState, useRef, useMemo, useCallback, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { Box } from '@chakra-ui/react'
import { BufferGeometry, Vector3 } from 'three';

function Scene() {
  const myRef = useRef();

  const lineGeometry = useMemo(() => {
    const points = [];
    points.push(new Vector3(- 10, 0, 0));
    points.push(new Vector3(0, 10, 0));
    points.push(new Vector3( 10, 0, 0 ) );
    return new BufferGeometry().setFromPoints(points);
  },[])

  return (
    <>
      <line position={[0, -2.5, -10]} ref={myRef} geometry={lineGeometry}>
        <lineBasicMaterial attach='material' color={0x4120e8} linewidth={10} />
      </line>
    </>
  );
}

function About() {

  return (
    <Box
      id="canvas-container"
      minH='100vh'
      minw='100vh'
      bg='black'
    >
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </Box>
  )
}

export default About;
//ReactDOM.render(<About />, document.getElementById('root'))
