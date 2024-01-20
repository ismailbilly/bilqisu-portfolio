// import React from 'react'
// import './index.scss'
// const Porfolio = () => {
//   return (
//     <div>Porfolio</div>
//   )
// }

// export default Porfolio
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './index.scss'
const Porfolio = () => {
   const sceneRef = useRef(null);

  // useEffect(() => {
  //   // Set up scene
  //   const scene = new THREE.Scene();

  //   // Set up camera
  //   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //   camera.position.z = 8;

  //   // Set up renderer
  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   sceneRef.current.appendChild(renderer.domElement);

  //   // Create big circle (Icosahedron)
  //   const bigCircleGeometry = new THREE.IcosahedronGeometry(2, 0);
  //   const bigCircleMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00, flatShading: true });
  //   const bigCircle = new THREE.Mesh(bigCircleGeometry, bigCircleMaterial);
  //   scene.add(bigCircle);

  //   // Create point light
  //   const pointLight = new THREE.PointLight(0xffffff, 1);
  //   pointLight.position.set(0, 0, 0);
  //   scene.add(pointLight);

  //   // Create small circles (Icosahedrons)
  //   const smallCircleGeometry = new THREE.IcosahedronGeometry(0.2, 0);
  //   const smallCircleMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000, flatShading: true });
  //   const smallCircles = [];

  //   for (let i = 0; i < 3; i++) {
  //     const angle = (i / 3) * Math.PI * 2;
  //     const x = Math.cos(angle) * 4;
  //     const z = Math.sin(angle) * 4;

  //     const smallCircle = new THREE.Mesh(smallCircleGeometry, smallCircleMaterial);
  //     smallCircle.position.set(x, 0, z);
  //     smallCircles.push(smallCircle);
  //     scene.add(smallCircle);
  //   }

  //   // Animation loop
  //   const animate = () => {
  //     requestAnimationFrame(animate);

  //     // Rotate small circles
  //     smallCircles.forEach(circle => {
  //       circle.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.005);
  //     });

  //     renderer.render(scene, camera);
  //   };

  //   animate();

  //   return () => {
  //     // Clean up
  //     scene.dispose();
  //     renderer.dispose();
  //   };
  // }, []);

  return (
    <div ref={sceneRef} className="wrapper">
      {/* <div class="container">
  <h1><span>WEB<br/>CSS3</span></h1>
  
  <div class="blobs_1"></div>
  <div class="blobs_2"></div>
  <div class="blobs_3"></div>
  <div class="blobs_4"></div>
  <div class="blobs_5"></div>
  <div class="blobs_6"></div>
  <div class="blobs_7"></div>
</div> */}
      <a href="resume.pdf" download="resume.pdf" className="flat-btn">
        <button>Download Resume</button>
      </a>
    </div>
  )
};

export default Porfolio;
