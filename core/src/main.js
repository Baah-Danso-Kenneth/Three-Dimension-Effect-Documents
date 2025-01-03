import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry()
const cubeMaterial = new THREE.MeshBasicMaterial({color: "red"})


const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
);

scene.add(cubeMesh)

const camera = new THREE.PerspectiveCamera(
  15, window.innerWidth / window.innerHeight,
  0.1,
  30
);

camera.position.z = 5;
const canvas = document.querySelector("canvas.threejs")


const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.9999999925494194))



const controls = new OrbitControls(camera, canvas);
controls.enableDamping=true;

// controls.autoRotate= true

window.addEventListener('resize',()=>{
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  
})
const renderloop=()=>{  
  controls.update()
  renderer.render(scene,camera)
  window.requestAnimationFrame(renderloop)
}


renderloop();

