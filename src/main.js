import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import './style.css'

const cameraAspect = window.innerWidth / window.innerHeight;

const images = [
    'assets/face1.png', 
    'assets/face2.png', 
    'assets/face3.png', 
    'assets/face4.png', 
    'assets/face5.png', 
    'assets/face6.png'
];

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, cameraAspect, 0.1, 1000);
camera.position.y = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const textureLoader = new THREE.TextureLoader();

const materials = images.map(image => {
  const texture = textureLoader.load(image);
  return new THREE.MeshBasicMaterial({ map: texture });
});

const cube = new THREE.Mesh(geometry, materials);
const controls = new OrbitControls(camera, renderer.domElement);

scene.add(cube);
controls.enableDamping = true;
controls.autoRotate = true;

function animate() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();