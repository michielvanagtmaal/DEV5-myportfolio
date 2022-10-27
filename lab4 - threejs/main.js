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

const textureloaderWall = new THREE.TextureLoader();
const wallTexture = textureloaderWall.load('/assets/textures/wall.webp');

const textureloaderRoof = new THREE.TextureLoader();
const roofTexture = textureloaderRoof.load('/assets/textures/roof.webp');


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

const wallBack = new THREE.PlaneGeometry(3, 2);
const wallBackMaterial = new THREE.MeshBasicMaterial( {color: 0xaaaaaa} );
wallBackMaterial.map = wallTexture;
wallBackMaterial.side = THREE.DoubleSide;
const wallBackMesh = new THREE.Mesh( wallBack, wallBackMaterial );
wallBackMesh.position.z = -2;

scene.add( wallBackMesh );

const wallLeft = new THREE.PlaneGeometry(2, 2);
const wallLeftMaterial = new THREE.MeshBasicMaterial( {color: 0xaaaaaa} );
wallLeftMaterial.map = wallTexture;
wallLeftMaterial.side = THREE.DoubleSide;
const wallLeftMesh = new THREE.Mesh( wallLeft, wallLeftMaterial );
wallLeftMesh.rotation.y = Math.PI/2;
wallLeftMesh.position.x = -1.5;
wallLeftMesh.position.z = -1;
scene.add( wallLeftMesh );

const wallRight = new THREE.PlaneGeometry(1.5, 2);
const wallRightMaterial = new THREE.MeshBasicMaterial( {color: 0xaaaaaa} );
wallRightMaterial.map = wallTexture;
wallRightMaterial.side = THREE.DoubleSide;
const wallRightMesh = new THREE.Mesh( wallRight, wallRightMaterial );
wallRightMesh.rotation.y = Math.PI/2;
wallRightMesh.position.x = 1.5;
wallRightMesh.position.z = -1.25;
scene.add( wallRightMesh );

const roof = new THREE.PlaneGeometry(3.3, 3);
const roofMaterial = new THREE.MeshBasicMaterial( {color: 0xaaaaaa} );
roofMaterial.map = roofTexture;
roofMaterial.side = THREE.DoubleSide;
const roofMesh = new THREE.Mesh( roof, roofMaterial );
roofMesh.rotation.x = Math.PI/2;
roofMesh.position.y = 1;
roofMesh.position.z = -0.6;
scene.add( roofMesh );


camera.position.z = 5;

function animate() {
  

  requestAnimationFrame( animate );
  renderer.render( scene, camera );
 
};

	animate();