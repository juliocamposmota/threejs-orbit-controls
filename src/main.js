import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import './style.css'

const cameraAspect = window.innerWidth / window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, cameraAspect, 0.1, 1000);
camera.position.y = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
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