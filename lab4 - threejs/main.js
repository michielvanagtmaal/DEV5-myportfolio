import './style.css'
import javascriptLogo from './javascript.svg'
//import three
import * as THREE from 'three';
//import orbit controls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Material } from 'three';
// import gltf loader
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// add directional light
const light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 0, 1, 1 ).normalize();
scene.add( light );


//ORBIT CONTROLS
const controls = new OrbitControls( camera, renderer.domElement );


// texture loader
const textureloaderSand = new THREE.TextureLoader();
const sandTexture = textureloaderSand.load('/assets/textures/sand.jpeg');

// create a box
const sand = new THREE.BoxGeometry(10, 10, 0.1);
const sandMaterial = new THREE.MeshBasicMaterial( { color: 0xaaaaaa } );
sandMaterial.map = sandTexture;
const sandMesh = new THREE.Mesh( sand, sandMaterial );
// rotate the box
sandMesh.rotation.x = Math.PI/2;
// move the box
sandMesh.position.y = -1;
scene.add( sandMesh );




camera.position.z = 5;

function animate() {
  camera.position.x = 2;
  camera.position.y = 1.01;

  requestAnimationFrame( animate );
  controls.update();
	renderer.render( scene, camera );
};

	animate();