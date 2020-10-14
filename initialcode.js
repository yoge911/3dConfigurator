<script>
    var scene = new THREE.Scene();			
    var camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 10000 );
    camera.position.x = 1000;
    camera.position.y = 0;
    camera.position.z = 1000;

    var helper = new THREE.CameraHelper( camera );
    scene.add( helper );
    
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xffffff, 0);
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );



    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(-1,0,0).normalize();
    scene.add(light);

    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1,0,0).normalize();
    scene.add(light);

    var light = new THREE.PointLight( 0xFFFF00 , 2, 600);
    light.position.set( 10, 0, 25 );
    scene.add( light );


    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
        renderer.setSize(width, height, false);
        }
        return needResize;
    }

    function render() {
        if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        }
        renderer.render(scene, camera);
    }


    var loader = new THREE.GLTFLoader();
    loader.load('models/new_main_lav.gltf', function(gltf) {
        scene.add(gltf.scene);
        console.log(scene.children.last());
        render();
    });

    loader.load('models/new_door_lav.gltf', function(gltf) {
        scene.add(gltf.scene);
        render();
    });

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render);
    controls.update();



</script>