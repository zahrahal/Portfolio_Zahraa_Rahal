// js/projects.js

document.addEventListener("DOMContentLoaded", () => {
  const projectItems = document.querySelectorAll(".project-item");

  const projectDetails = {
    safran: `
    <h3>Nacelle Actuation System</h3>

    <div class="popup-image-gallery">
      <img src="images/projects/safran_main.png" alt="Nacelle Actuation System" class="popup-image">
    </div>

    <p>
      This project was developed during an internship at <strong>InterDigital</strong>.
      Its goal was to explore the use of the <strong>MPEG Haptics standard</strong> in a robotic <strong>teleoperation</strong> context.
      The demonstrator enables real-time remote control of a <strong>Universal Robots UR3e</strong> arm using a
      <strong>Geomagic Touch haptic device</strong>, allowing the operator to both control the robot and feel forces from its environment.
    </p>

    <span class="popup-section-title">System Architecture</span>
    <p>
      The <strong>UR3e</strong> served as a reference platform to design and implement a <strong>standards-based haptic streaming pipeline</strong>.
      Bidirectional <em>position</em> and <em>force</em> data are encoded using the MPEG Haptics codec (MIHS stream)
      and transmitted over <strong>TCP</strong> and the <strong>RTDE interface</strong> of the robot.
    </p>

    <div class="popup-image-gallery">
      <img src="images/projects/hapticcom.png" alt="Network architecture" class="popup-image">
      <p class="img-caption">fig.1) Overview of the teleoperation pipeline based on the MPEG Haptics standard.</p>
    </div>

    <p>
      The system is composed of two machines (fig.1): the first (Unity/C#) captures the Geomagic Touch positions and orientations,
      which are <strong>encoded in MPEG Haptics format</strong> through a C++ DLL. The second (C++/Python) decodes the stream,
      sends Cartesian commands to the robot via RTDE, and sends force feedback back to the Touch device (fig.4).
    </p>

    <span class="popup-section-title">Force & Motion Mapping</span>
    <div class="popup-image-gallery">
      <img src="images/projects/hapticmapping.png" alt="Mapping " class="popup-image">
      <p class="img-caption">fig.2) Scale and apply the rotation between the Geomagic Touch and the UR3e.</p>
    </div>

    <p>
      Mapping between the robot’s end-effector and the haptic device ensures intuitive control.
      The UR3e’s workspace is scaled to match the Geomagic Touch’s limited range of motion (fig.2),
      allowing precise manipulation within the robot’s reachable volume.
    </p>

    <span class="popup-section-title">Communication Loop</span>
    <div class="popup-image-gallery">
      <img src="images/projects/hapticrtde.png" alt="Force mapping diagram" class="popup-image">
      <p class="img-caption">fig.3) RTDE communication loop for sending commands and receiving force feedback.</p>
    </div>

    <p>
      Force feedback from the UR3e is retrieved via RTDE (fig.3) and mapped to the Geomagic Touch.
      This allows the operator to feel contact forces and constraints, enhancing situational awareness during teleoperation.
      Position and rotation (as quaternions) are sent to the robot, while force feedback (Fx, Fy, Fz) is received in real time.
    </p>

    <span class="popup-section-title">Safety and Constraints</span>
    <div class="popup-image-gallery">
      <img src="images/projects/hapticsafety.png" alt="Safety zone" class="popup-image">
      <p class="img-caption">fig.4) Adjustable safety zone implemented in Unity to limit the working volume.</p>
    </div>

    <p>
      To ensure operator safety, a <strong>virtual safety zone</strong> was implemented in Unity.
      This prevents the user from exceeding the robot’s safe workspace and helps avoid collisions
      by dynamically constraining movements through force feedback.
    </p>

    <span class="popup-section-title">Operation Modes</span>
    <p>
      Two operating modes were developed:
    </p>
    <ul>
      <li><strong>Real-time streaming:</strong> live bidirectional control with force feedback and haptic interaction.</li>
      <li><strong>Playback mode:</strong> replay of pre-recorded trajectories (.hjif / .hmpg) for reproducible demonstrations.</li>
    </ul>

    <div class="popup-image-gallery">
      <img src="images/projects/hapticschema.png" alt="Communication pipeline" class="popup-image">
      <p class="img-caption">fig.5) End-to-end communication pipeline between Unity, C++, Python, and UR3e robot.</p>
    </div>

    <span class="popup-section-title">Technical Challenges</span>
    <p>
      The project combined <strong>Unity (C#)</strong> for visualization, <strong>C++</strong> for MPEG encoding/decoding,
      and <strong>Python/RTDE</strong> for robot control. Quaternion-based pose representation ensured frame consistency.
      Main challenges included <strong>latency management</strong>, <strong>frame synchronization</strong>,
      and <strong>control stability</strong> in real-time haptic feedback.
    </p>

    <span class="popup-section-title">Conclusion</span>
    <p>
      This demonstrator validated the <strong>feasibility of integrating MPEG Haptics into a robotic loop</strong>,
      highlighting its potential for applications in <em>remote manipulation</em> and <em>surgical teleoperation</em>.
    </p>
  `,


    autonomous: `
    <h3>Autonomous Mobile Robot – STM32 & ROS2 Integration</h3>

    <div class="popup-image-gallery">
      <img src="images/projects/robotros2.png" alt="Autonomous Robot" class="popup-image">
    </div>

    <p>
      This project involved the development of an <strong>autonomous mobile robot</strong> capable of operating in three distinct modes:
      <em>manual control</em>, <em>obstacle avoidance</em>, and <em>color tracking</em>.  
      The robot integrates both <strong>embedded control (STM32)</strong> and <strong>high-level vision processing (Raspberry Pi + ROS2)</strong>,
      communicating wirelessly with a <strong>PC-based HMI</strong>.
    </p>

    <span class="popup-section-title">Objectives</span>
    <p>
      The goal of this project was to design, program, and integrate a robot capable of:
    </p>
    <ul>
      <li><strong>Manual Mode:</strong> Remote control of speed and direction with obstacle detection.</li>
      <li><strong>Autonomous Mode:</strong> Random navigation with continuous obstacle avoidance.</li>
      <li><strong>Tracking Mode:</strong> Color-based object following using computer vision.</li>
    </ul>

    <span class="popup-section-title">System Architecture</span>
    <p>
      The system architecture is based on two main processing units — an <strong>STM32 Nucleo-F411</strong> microcontroller and a 
      <strong>Raspberry Pi</strong> — communicating through a serial link (<strong>UART</strong>) and integrated in a <strong>ROS2</strong> network.
    </p>

    <div class="popup-image-gallery">
      <img src="images/projects/robotros2node.svg" alt="ROS2 nodes and topics diagram" class="popup-image">
      <p class="img-caption">fig.1) ROS2 nodes and topics structure between STM32 and Raspberry Pi.</p>
    </div>

    <p>
      The <strong>STM32 Nucleo-F411</strong> is responsible for:
    </p>
    <ul>
      <li>Motor control using PWM and closed-loop regulation.</li>
      <li>Acquisition of ultrasonic and infrared distance sensors.</li>
      <li>LCD display management for real-time information.</li>
      <li>Serial communication with the Raspberry Pi through UART.</li>
    </ul>

    <p>
      The <strong>Raspberry Pi</strong> handles:
    </p>
    <ul>
      <li>Camera acquisition and <strong>image processing</strong> using <strong>OpenCV</strong>.</li>
      <li>ROS2 node management and inter-process communication.</li>
      <li>Wi-Fi communication with the <strong>PC Host</strong> HMI.</li>
    </ul>

    <span class="popup-section-title">Communication Architecture</span>
    <p>
      The robot operates under a <strong>ROS2</strong> communication framework.  
      Two primary <strong>topics</strong> are used between nodes:
    </p>
    <ul>
      <li><code>/commande/move</code> – Sends motion commands (speed, direction) from the PC Host to the STM32.</li>
      <li><code>/sensor/dist_back</code> – Publishes sensor data from the STM32 to the Raspberry Pi and PC for display and decision-making.</li>
    </ul>

    <div class="popup-image-gallery">
      <img src="images/projects/robotros2schema.png" alt="ROS2 global communication schema" class="popup-image">
      <p class="img-caption">fig.2) Global communication schema between PC Host, Raspberry Pi, and STM32 (ROS2 topics).</p>
    </div>

    <span class="popup-section-title">Human-Machine Interface</span>
    <p>
      A <strong>custom HMI</strong> running on a PC host allows users to:
    </p>
    <ul>
      <li>Select the robot's operation mode (Manual / Auto / Tracking).</li>
      <li>Send velocity and direction commands via Wi-Fi.</li>
      <li>Monitor sensor feedback and camera video stream.</li>
    </ul>

    <span class="popup-section-title">Technical Highlights</span>
    <p>
      The system leverages the following technologies:
    </p>
    <ul>
      <li><strong>STM32CubeIDE</strong> for low-level embedded programming (RTOS-based).</li>
      <li><strong>ROS2</strong> for modular communication and node orchestration.</li>
      <li><strong>OpenCV</strong> for real-time color detection and tracking.</li>
      <li><strong>Wi-Fi / UART</strong> communication for data exchange.</li>
      <li><strong>HMI (Python / Qt)</strong> for visualization and user control.</li>
    </ul>

    <span class="popup-section-title">Conclusion</span>
    <p>
      This project demonstrates the integration of <strong>real-time embedded systems</strong> and <strong>ROS2-based robotic communication</strong>,
      combining low-level motor control with high-level vision processing.
      It provided valuable experience in <strong>distributed robotics software</strong>, <strong>real-time communication</strong>,
      and <strong>multi-processor system design</strong>.
    </p>
  `,

    sensor: `
    <h3>Sensor Network – Multi-sensor CAN Bus System</h3>

    <div class="popup-image-gallery">
      <img src="images/projects/reseaucapteur.png" alt="CAN Bus Sensor Network Overview" class="popup-image">
    </div>

    <h4 class="popup-section-title"> Objective</h4>
    <p>
      The goal of this project was to design and implement a <strong>distributed sensor network</strong> where multiple
      <strong>STM32 Nucleo boards</strong> communicate over a <strong>CAN bus</strong> to send measurements to a <strong>PC Host</strong>.
      Each microcontroller is associated with a specific type of sensor and formats its data into standardized CAN frames.
    </p>

    <h4 class="popup-section-title"> System Overview</h4>
    <p>
      Physical measurements are collected by several STM32-based sensor nodes, which transmit their data via
      the <strong>Controller Area Network (CAN)</strong> protocol.  
      The host PC receives and processes these frames to visualize and record sensor information in real time.
    </p>

    <div class="popup-image-gallery">
      <img src="images/projects/rescapt.png" alt="CAN Network Communication Diagram" class="popup-image">
      <p class="img-caption">fig.1) Communication architecture of the multi-node CAN bus system.</p>
    </div>

    <h4 class="popup-section-title"> Hardware Nodes</h4>
    <p>
      The network is composed of several STM32 Nucleo boards, each assigned to a different sensing function:
    </p>
    <ul>
      <li><strong>Board 1 – Motor & Wind Sensor:</strong> Controls a <em>Robotis Dynamixel</em> servo motor and measures wind speed using a <em>Somfy anemometer</em>.</li>
      <li><strong>Board 2 – Environmental Sensors:</strong> Reads <em>luminosity</em> and <em>distance</em> from a <em>VL6180X</em> sensor, and collects <em>pressure</em> and <em>humidity</em> data via <em>LPS22HB</em> and <em>HTS221</em>.</li>
      <li><strong>Board 3 – Motion Sensor:</strong> Acquires acceleration and gyroscope data from the <em>MPU9250</em> via I²C.</li>
    </ul>

    <h4 class="popup-section-title"> Communication & Integration</h4>
    <p>
      Each board encapsulates its sensor readings in <strong>CAN frames</strong> with a unique message ID.  
      The host computer receives and interprets these frames, ensuring synchronized multi-sensor data collection.  
      CAN communication offers high reliability, prioritization, and noise immunity, ideal for embedded sensor systems.
    </p>

    <h4 class="popup-section-title"> Technical Details</h4>
    <ul>
      <li><strong>Microcontrollers:</strong> STM32 Nucleo boards programmed under <em>STM32CubeIDE</em>.</li>
      <li><strong>Communication bus:</strong> CAN.</li>
      <li><strong>Sensor interfaces:</strong> I²C for local acquisition; CAN for inter-node communication.</li>
      <li><strong>Host interface:</strong> USB-to-CAN adapter connected to the PC for data visualization.</li>
    </ul>

    <h4 class="popup-section-title"> Skills & Tools</h4>
    <p>
      <strong>STM32</strong> · <strong>CAN Bus</strong> · <strong>I²C</strong> · <strong>Embedded C</strong> · <strong>STM32CubeIDE</strong>
    </p>
  `,

    egis: `
    <h3>Reef Pulse – AI for Marine Sound Recognition</h3>

    <div class="popup-image-gallery">
      <img src="images/projects/reefpulse.png" alt="Reef Pulse Project Overview" class="popup-image">
    </div>

    <h4 class="popup-section-title"> Objective</h4>
    <p>
      The goal of this project, conducted in partnership with <strong>ENIB (2023)</strong>, was to apply 
      <strong>Artificial Intelligence</strong> and <strong>Machine Learning</strong> techniques to the 
      <strong>detection and classification of marine species</strong> based on underwater acoustic signals.  
      This project is part of a global initiative to develop <em>eco-responsible monitoring tools</em> for 
      <strong>Marine Protected Areas (MPAs)</strong>.
    </p>

    <h4 class="popup-section-title"> Context</h4>
    <p>
      Coral reefs host nearly <strong>30% of marine biodiversity</strong> and support over a billion people worldwide.  
      However, due to human impact, up to <strong>90% of reefs may disappear by 2050</strong>.  
      Current visual survey methods are <em>slow, costly, and limited in time and space</em>.  
      The <strong>Reef Pulse</strong> initiative aims to overcome these limitations by using continuous underwater sound
      recordings to assess the ecological state of coral reefs in real time.
    </p>

    <p>
      By automatically detecting key biological and anthropogenic sound events, Reef Pulse provides 
      valuable indicators to guide <strong>marine conservation and management policies</strong>.
    </p>

    <h4 class="popup-section-title"> Methodology</h4>
    <p>
      The study focused on the analysis of <strong>bioacoustic data</strong> recorded on coral reef sites.  
      Using <strong>Machine Learning</strong> models, we explored how different <strong>acoustic features</strong> 
      (spectral, temporal, cepstral) affect the accuracy of species classification.
    </p>

    <div class="popup-image-gallery">
      <img src="images/projects/whale_spectrogram.png" alt="Spectrogram of underwater sound" class="popup-image">
      <p class="img-caption">fig.1) Example of spectrogram visualization used for species sound analysis.</p>
    </div>

    <p>
      Various feature extraction techniques were tested (e.g., <em>FFT, MFCC, Wavelets</em>), 
      combined with supervised classifiers such as <em>Random Forests</em>, <em>SVM</em>, and <em>XGBoost</em>.  
      The objective was to identify the best compromise between <strong>classification performance</strong> 
      and <strong>computational efficiency</strong>.
    </p>

    <h4 class="popup-section-title"> Energy-Aware AI</h4>
    <p>
      In addition to model accuracy, particular attention was paid to <strong>energy consumption</strong>.  
      We analyzed the computational complexity of each algorithm to assess their environmental footprint 
      and determine the most efficient trade-off between energy use and detection reliability. LightGBM was optimal for this.
    </p>

    <div class="popup-image-gallery">
      <img src="images/projects/reefpulseconso.png" alt="Energy efficiency comparison between ML models" class="popup-image">
      <p class="img-caption">fig.2) Energy–accuracy trade-off across different ML algorithms tested.</p>
    </div>

    <h4 class="popup-section-title"> Research Axes</h4>
    <ul>
      <li><strong>Axe 1 – Literature Review:</strong> State of the art in bioacoustics and AI applications for coral reef monitoring.</li>
      <li><strong>Axe 2 – Traditional ML Methods:</strong> Design of sound classification pipelines using conventional ML techniques.</li>
      <li><strong>Axe 3 – Comparative Study:</strong> Evaluation of performance and sustainability metrics across models.</li>
    </ul>

    <h4 class="popup-section-title"> Key Takeaways</h4>
    <p>
      This project demonstrates the potential of <strong>AI-driven acoustic monitoring</strong> to support 
      sustainable management of marine ecosystems.  
      By optimizing models for both <strong>accuracy</strong> and <strong>energy efficiency</strong>, 
      we contribute to the development of responsible and scalable technologies for marine conservation.
    </p>

    <p><em>Note: Due to confidentiality, specific datasets, algorithms, and quantitative results are not disclosed.</em></p>
  `,
    pickplace: `
    <h3>Pick-and-Place System – ABB Robot</h3>

    <div class="popup-image-gallery">
      <img src="images/projects/abbpresentation.png" alt="ABB Robot Pick-and-Place Setup" class="popup-image">
    </div>

    <h4 class="popup-section-title">Objective</h4>
    <p>
      The goal of this project was to design and program a <strong>pick-and-place robotic system</strong> using an 
      <strong>ABB industrial robot</strong>. The system was simulated and programmed in <strong>RobotStudio</strong>, 
      with real-time visual feedback provided by a camera mounted on the robot.
    </p>

    <div class="popup-image-gallery">
      <img src="images/projects/abb.png" alt="Robot Scene" class="popup-image">
      <p class="img-caption">fig.1) Scene dispositionof the ABB robot.</p>
    </div>

    <h4 class="popup-section-title">Concept</h4>
    <p>
      The robot had to identify several <strong>pucks</strong> scattered on a table, each marked with specific patterns.
      Using a <strong>Python + OpenCV</strong> vision module, the system analyzed the scene, detected the puck positions, 
      and determined their stacking order, through QrCode placed on the pucks.
    </p>

    <div class="popup-image-gallery">
      <img src="images/projects/abbqrcode.png" alt="Scene analysis with OpenCV" class="popup-image">
      <p class="img-caption">fig.2) Scene detection and object localization using OpenCV via QrCode.</p>
    </div>

    <h4 class="popup-section-title">Implementation</h4>
    <p>
      The control logic combined:
    </p>
    <ul>
      <li><strong>Python + OpenCV</strong> for image acquisition and object detection.</li>
      <li><strong>RobotStudio RAPID scripts</strong> for motion control and path planning.</li>
      <li>TCP communication between the detection script and the robot controller.</li>
    </ul>

    <h4 class="popup-section-title">Task Description</h4>
    <p>
      Once the pucks were detected, the robot performed the sequence:
    </p>
    <ol>
      <li>Move above detected puck.</li>
      <li>Pick it up using the gripper.</li>
      <li>Stack it precisely on a target location.</li>
    </ol>

    <p>
      The trajectory was optimized to minimize movement time and avoid collisions.
    </p>

    <h4 class="popup-section-title">Tools & Skills</h4>
    <ul>
      <li>ABB <strong>RobotStudio</strong></li>
      <li><strong>Python</strong> for vision processing</li>
      <li><strong>OpenCV</strong> for object detection</li>
    </ul>
  `,

    mocap: `
    <h3>Motion Capture – Unity</h3>

    <div class="popup-image-gallery">
      <img src="images/projects/mc.png" alt="Unity Motion Capture" class="popup-image">
    </div>

    <h4 class="popup-section-title">Objective</h4>
    <p>
      Development of a <strong>motion capture system</strong> integrated into <strong>Unity</strong> for 
      interactive character animation and control experiments.
    </p>

    <h4 class="popup-section-title">Description</h4>
    <p>
      The project consisted of creating a virtual agent capable of receiving and interpreting 
      input signals and replaying animations previously recorded through motion capture.
    </p>

    <div class="popup-image-gallery">
      <video class="popup-video" autoplay loop muted playsinline>
        <source src="images/projects/mcanimation.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p class="img-caption">fig.1) 3D character tracking through Unity’s motion data pipeline.</p>
    </div>

    <h4 class="popup-section-title">Implementation</h4>
    <p>
      The captured data was processed through <strong>C# scripts</strong> to drive humanoid rig animations 
      in Unity. The animations were refined for smooth transitions and realistic timing.
    </p>

    <h4 class="popup-section-title">Tools & Skills</h4>
    <ul>
      <li><strong>Unity</strong> (C# scripting, rig animation)</li>
      <li><strong>Motion capture</strong> data integration</li>
      <li>Animation blending and timeline control</li>
    </ul>
    `,
    
    ultrasonic: `
    <h3>Ultrasonic LiDAR – ROS2 Scanning System (Arduino + Raspberry Pi)</h3>

    <div class="popup-image-gallery">
      <img src="images/projects/ultrasoniclidar.png" alt="Ultrasonic LiDAR prototype" class="popup-image">
      <p class="img-caption">Ultrasonic LiDAR prototype (HC-SR04 on servo)</p>
    </div>

    <h4 class="popup-section-title">Objective</h4>
    <p>
      Build a lightweight <strong>LIDAR-like scanner</strong> by combining an 
      <strong>Arduino Mega</strong> (servo + HC-SR04 control) and a 
      <strong>Raspberry Pi</strong> running a Python <strong>ROS2 bridge</strong>.
      The Arduino streams servo angle + distance through <code>/dev/ttyACM0</code>;  
      the Raspberry Pi converts these values into <strong>ROS2 topics</strong> and visualizes them in <strong>RViz2</strong>.
    </p>

    <h4 class="popup-section-title">Hardware & Data Flow</h4>
    <ul>
      <li><strong>Arduino Mega</strong>: drives the servo sweep and reads the ultrasonic sensor.</li>
      <li><strong>Serial link</strong> via <code>/dev/ttyACM0</code> sending angle + distance frames.</li>
      <li><strong>Raspberry Pi 4</strong>: Python script parses serial data and publishes ROS2 topics:</li>
      <ul>
        <li><code>/servo_angle</code> — <strong>Float32</strong> (angle in degrees)</li>
        <li><code>/sonar_range</code> — <strong>sensor_msgs/Range</strong> (distance in meters)</li>
        <li><code>/sonar_points</code> — <strong>MarkerArray</strong> used to display detected points</li>
      </ul>
      <li><strong>RViz2</strong>: shows the sweeping direction arrow + mapped points.</li>
    </ul>

    <h4 class="popup-section-title">Demo 1 — Angle & Distance Arrow</h4>
    <p>
      The first demo shows a <strong>real-time arrow</strong> that uses:
      <br>• the <strong>servo angle</strong> to rotate over 180°  
      <br>• the <strong>ultrasonic distance</strong> to scale its length (closer → shorter, farther → longer).
    </p>

    <div class="popup-image-gallery">
      <video class="popup-video" controls loop muted playsinline>
        <source src="images/projects/ultrasonic_angle_demo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p class="img-caption">Demo 1 — Arrow reacting to distance (length) and servo position (rotation).</p>
    </div>

    <h4 class="popup-section-title">Demo 2 — 2D Point Mapping</h4>
    <p>
      The second demo displays the <strong>accumulated point measurements</strong> captured during the 
      180° sweep. Each ultrasonic reading becomes a plotted point, producing a simple but functional 
      <strong>2D map of the environment</strong> inside RViz2.
    </p>

    <div class="popup-image-gallery">
      <video class="popup-video" controls loop muted playsinline>
        <source src="images/projects/ultrasonic_map_demo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p class="img-caption">Demo 2 — Points generated from ultrasonic data forming the scanned area.</p>
    </div>

    <h4 class="popup-section-title">Current Status & Next Steps</h4>
    <p>
      The full pipeline (Arduino → Serial → ROS2 → RViz) is operational.  
      Next steps include measurement smoothing, noise filtering, and potential shape detection.
    </p>

    <h4 class="popup-section-title">Repository</h4>
    <p>
      Full project available on GitHub:<br>
      <a href="https://github.com/FlorianWellme/Ultrasoniclidar_ROS" target="_blank">
        Ultrasoniclidar_ROS
      </a>
    </p>
  `,



    guidance: `
    <h3>From Rocket Guidance to AUV Navigation System</h3>

    <div class="popup-image-gallery">
      <img src="images/projects/Rocket.png" alt="Initial rocket guidance concept" class="popup-image">
    </div>

    <h4 class="popup-section-title">Project Evolution</h4>
    <p>
      This project initially aimed to develop a <strong>guidance and stabilization system for a rocket</strong> 
      using an IMU, camera, and servo-controlled fins. However, during development, the scope evolved into a more 
      comprehensive <strong>Autonomous Underwater Vehicle (AUV) navigation system</strong>, offering richer challenges 
      in sensor fusion, path planning, and autonomous control.
    </p>

    <h4 class="popup-section-title">Phase 1 – IMU Data Acquisition & Initial Visualization</h4>
    <p>
      The foundation of the system relies on an <strong>MPU6500/MPU9250 IMU</strong> connected to an 
      <strong>Arduino Mega</strong>. The Arduino firmware reads raw accelerometer and gyroscope data at 
      <strong>100 Hz</strong> and streams it via serial (<code>115200 baud</code>) using a timer interrupt 
      for precise sampling intervals (<code>dt = 0.01s</code>).
    </p>

    <p>
      Initial data visualization was implemented in <strong>Matplotlib</strong>, displaying raw sensor values 
      and preliminary angle estimates. This stage revealed significant noise in accelerometer-based angle 
      calculations, motivating the need for robust filtering.
    </p>

    <div class="popup-image-gallery">
      <video class="popup-video" controls loop muted playsinline>
        <source src="images/projects/matplotKalman.mp4" type="video/mp4">
      </video>
      <p class="img-caption">fig.1) Early Matplotlib visualization showing noisy raw IMU data before filtering.</p>
    </div>

    <h4 class="popup-section-title">Phase 2 – Kalman Filter Implementation</h4>
    <p>
      To fuse accelerometer and gyroscope data effectively, a <strong>1D Kalman filter</strong> was implemented 
      directly on the Arduino for <strong>roll and pitch estimation</strong>. The filter operates in two stages:
    </p>

    <ul>
      <li><strong>Prediction Step:</strong> Integrates gyroscope angular velocity while compensating for 
      estimated bias drift:
      <br><code>angle += (gyroRate - bias) x dt</code>
      <br>The error covariance matrix <code>P</code> is updated with process noise parameters 
      (<code>Q_angle = 0.001</code>, <code>Q_bias = 0.003</code>).</li>
      
      <li><strong>Correction Step:</strong> Corrects the prediction using accelerometer-derived angles. 
      Kalman gains are computed based on measurement noise (<code>R_measure = 0.03</code>), and the state 
      estimate is refined:
      <br><code>angle += K₀ x (accAngle - angle)</code>
      <br><code>bias += K₁ x (accAngle - angle)</code></li>
    </ul>

    <p>
      <strong>Yaw estimation</strong> relies solely on gyroscope integration (no absolute reference), 
      accumulating angular velocity over time. This approach is susceptible to drift but sufficient for 
      short-term orientation tracking.
    </p>

    <div class="popup-image-gallery">
      <img src="images/projects/KalmanFilterzoom.png" alt="Kalman filter performance comparison" class="popup-image">
      <p class="img-caption">fig.2) Comparison between raw accelerometer angles (noisy) and Kalman-filtered 
      estimates (smooth, responsive).</p>
    </div>

    <p>
      The Kalman filter significantly reduces accelerometer noise while maintaining gyroscope responsiveness, 
      producing stable orientation estimates suitable for control applications.
    </p>

    <h4 class="popup-section-title">Phase 3 – Real-Time Web Dashboard with FastAPI</h4>
    <p>
      To enable real-time monitoring and interaction, a <strong>FastAPI</strong> backend was developed with:
    </p>

    <ul>
      <li><strong>Serial Communication:</strong> Python thread continuously reads Arduino serial output using 
      <code>pyserial</code>, parsing CSV-formatted sensor data (ax, ay, az, gx, gy, gz, angles).</li>
      
      <li><strong>Data Buffering:</strong> Recent measurements are stored in <code>deque</code> structures 
      (max 200 points) for efficient real-time plotting.</li>
      
      <li><strong>WebSocket Streaming:</strong> Two WebSocket endpoints push data at 20 Hz and 10 Hz:
        <ul>
          <li><code>/ws/imu</code>: Streams accelerometer, gyroscope, and angle data to <strong>Plotly.js</strong> charts</li>
          <li><code>/ws/navigation</code>: Broadcasts navigation state (position, waypoints, trajectory)</li>
        </ul>
      </li>
      
      <li><strong>Interactive UI:</strong> HTML5/Canvas-based interface displays:
        <ul>
          <li>Live <strong>Plotly</strong> time-series graphs (acceleration, angular velocity, filtered angles)</li>
          <li><strong>Canvas animations</strong>: rotating motor visualization, servo position indicators</li>
          <li><strong>Attitude gauges</strong>: pitch and yaw displayed using rotated aircraft imagery</li>
          <li><strong>Navigation map</strong>: Click-to-define waypoints, real-time drone position tracking</li>
        </ul>
      </li>
    </ul>

    <div class="popup-image-gallery">
      <video class="popup-video" controls loop muted playsinline>
        <source src="images/projects/APIA6K.mp4" type="video/mp4">
      </video>
      <p class="img-caption">fig.3) FastAPI dashboard showing real-time IMU data, Kalman-filtered angles, 
      and interactive navigation map.</p>
    </div>

    <h4 class="popup-section-title">Phase 4 – Autonomous Navigation System</h4>
    <p>
      The <code>DroneNavigator</code> class implements waypoint-based autonomous navigation using:
    </p>

    <ul>
      <li><strong>Dead Reckoning:</strong> Position estimation based on yaw angle and constant velocity 
      (<code>1.4 m/s</code>):
      <br><code>x += speed x cos(yaw) x dt</code>
      <br><code>y += speed x sin(yaw) x dt</code></li>
      
      <li><strong>Al-Kashi Correction:</strong> Computes bearing error between current heading and target waypoint:
      <br><code>target_angle = atan2(Δy, Δx)</code>
      <br><code>angle_error = normalize(target_angle - yaw)</code></li>
      
      <li><strong>Servo Control Law:</strong> Proportional control maps angular error to fin deflections:
      <br><code>servo1 = roll - yaw - (k x angle_error)</code>
      <br><code>servo2 = roll + pitch + yaw + (k x angle_error)</code>
      <br>Saturation limits prevent excessive actuator commands (<code>±45°</code> max).</li>
      
      <li><strong>Waypoint Sequencing:</strong> When distance to current waypoint falls below threshold 
      (<code>2.0 m</code>), the system advances to the next target. Mission completion is detected when 
      all waypoints are reached.</li>
    </ul>

    <p>
      The navigation state (position, trajectory, distance to waypoint, servo commands) is broadcast via 
      WebSocket for live visualization on the interactive map.
    </p>

    <h4 class="popup-section-title">Phase 5 – ROS2 Gazebo Simulation (Current Development)</h4>
    <p>
      The project is currently transitioning to <strong>ROS2 Humble</strong> + <strong>Gazebo</strong> for 
      high-fidelity simulation before hardware deployment. Development includes:
    </p>

    <ul>
      <li><strong>URDF Model:</strong> Custom AUV model with 4 control fins, propeller, IMU sensor, and camera</li>
      <li><strong>ROS2 Topics:</strong>
        <ul>
          <li><code>/fin_control</code> – Fin angle commands (4x <code>Float64</code>)</li>
          <li><code>/propeller_thrust</code> – Propulsion control</li>
          <li><code>/imu/data</code> – Simulated IMU sensor fusion</li>
          <li><code>/camera/image_raw</code> – Visual feedback for advanced navigation</li>
          <li><code>/odom</code> – Ground-truth position for validation</li>
        </ul>
      </li>
      <li><strong>Custom Gazebo World:</strong> Underwater environment with obstacles and test zones</li>
      <li><strong>Control Architecture:</strong> ROS2 nodes for state estimation, path planning, and low-level control</li>
    </ul>

    <div class="popup-image-gallery">
      <img src="images/projects/auv_urdf.png" alt="AUV URDF model" class="popup-image">
      <p class="img-caption">fig.4) URDF model of the AUV showing control surfaces and sensor placement.</p>
    </div>

    <h4 class="popup-section-title">Final Objective</h4>
    <p>
      The completed system will autonomously navigate between GPS/acoustic beacon waypoints while scanning 
      designated zones. The camera provides visual feedback for obstacle avoidance and target identification. 
      The architecture supports future extensions: SLAM integration, multi-vehicle coordination, and adaptive 
      mission planning.
    </p>

    <h4 class="popup-section-title">Technologies & Skills</h4>
    <ul>
      <li><strong>Embedded Systems:</strong> Arduino (C/C++), I2C/Serial protocols, timer interrupts</li>
      <li><strong>Signal Processing:</strong> Kalman filtering, sensor fusion, bias estimation</li>
      <li><strong>Backend Development:</strong> FastAPI, WebSockets, asyncio, pyserial</li>
      <li><strong>Frontend:</strong> HTML5 Canvas, Plotly.js, real-time data visualization</li>
      <li><strong>Control Theory:</strong> PID control, dead reckoning, waypoint navigation</li>
      <li><strong>Robotics:</strong> ROS2 (rclpy/rclcpp), URDF modeling, Gazebo simulation</li>
      <li><strong>Tools:</strong> RViz, Matplotlib, Git</li>
    </ul>

    <h4 class="popup-section-title">Repository</h4>
    <p>
      <em>Code will be made available once simulation phase is complete and tested.</em>
    </p>
  `,

ros_gazebo: `
    <h3>ROS2 & Gazebo – Robot Simulation & Navigation</h3>

    <div class="popup-image-gallery">
      <img src="images/projects/gazebo_rviz_urdf.png" alt="ROS2 Gazebo integration" class="popup-image">
    </div>

    <h4 class="popup-section-title">Overview</h4>
    <p>
      This section showcases various projects using <strong>ROS2 Humble</strong> and 
      <strong>Gazebo Classic</strong> for robot simulation, demonstrating skills in robot 
      modeling, sensor integration, autonomous navigation, and SLAM (Simultaneous Localization 
      and Mapping).
    </p>

    <h4 class="popup-section-title">Project 1 – URDF Modeling & Visualization</h4>
    <p>
      The foundation of robot simulation in ROS2 begins with creating accurate 
      <strong>URDF (Unified Robot Description Format)</strong> files. These XML-based files 
      define the robot's kinematic structure, visual appearance, collision geometry, and 
      physical properties (mass, inertia).
    </p>

    <h5>URDF Structure & Components</h5>
    <ul>
      <li><strong>Links:</strong> Represent rigid bodies (chassis, arms, wheels) with visual and collision meshes</li>
      <li><strong>Joints:</strong> Define kinematic relationships (revolute, prismatic, fixed, continuous)</li>
      <li><strong>Inertial Properties:</strong> Mass distribution and moment of inertia for physics simulation</li>
      <li><strong>Gazebo Tags:</strong> Simulator-specific parameters (materials, sensors, plugins)</li>
    </ul>

    <h5>RViz Visualization & Control</h5>
    <p>
      Using <code>robot_state_publisher</code> and <code>joint_state_publisher_gui</code>, 
      the URDF model can be visualized in <strong>RViz</strong> with interactive joint control. 
      This allows validation of kinematics before physics simulation.
    </p>

    <div class="popup-image-gallery">
      <img src="images/projects/gazebo_rviz_controlangle.png" alt="RViz joint control interface" class="popup-image">
      <p class="img-caption">fig.1) RViz displaying URDF model with interactive joint control sliders.</p>
    </div>

    <div class="popup-image-gallery">
      <video class="popup-video" controls loop muted playsinline>
        <source src="images/projects/gazebo_controlaxe.mp4" type="video/mp4">
      </video>
      <p class="img-caption">fig.2) Real-time joint manipulation demonstrating kinematic chain behavior.</p>
    </div>

    <h5>Gazebo Integration</h5>
    <p>
      Transitioning from RViz to Gazebo requires additional URDF modifications:
    </p>
    <ul>
      <li><strong>Material Colors:</strong> Gazebo-specific <code>&lt;gazebo reference="link"&gt;</code> 
      tags with materials like <code>Gazebo/Black</code>, <code>Gazebo/Orange</code></li>
      <li><strong>Joint State Publishing:</strong> <code>libgazebo_ros_joint_state_publisher.so</code> 
      plugin to broadcast joint positions to <code>/joint_states</code> topic</li>
      <li><strong>Joint Control:</strong> <code>libgazebo_ros_joint_pose_trajectory.so</code> 
      plugin to receive trajectory commands via <code>/set_joint_trajectory</code></li>
      <li><strong>Physics Tuning:</strong> Adding damping/friction to prevent unrealistic behavior:
      <br><code>&lt;dynamics damping="10.0" friction="10.0"/&gt;</code></li>
    </ul>

    <h5>Advanced Integration – Camera Sensor</h5>
    <p>
      The final configuration includes a simulated camera using the 
      <code>libgazebo_ros_camera.so</code> plugin, publishing:
    </p>
    <ul>
      <li><code>/camera/image_raw</code> – Raw RGB image stream</li>
      <li><code>/camera/camera_info</code> – Calibration parameters</li>
    </ul>

    <div class="popup-image-gallery">
      <img src="images/projects/gazebo_rviz_urdf.png" alt="Complete robot with camera in Gazebo" class="popup-image">
      <p class="img-caption">fig.3) Final robot model in Gazebo with functional camera sensor, 
      synchronized with RViz visualization.</p>
    </div>

    <h4 class="popup-section-title">Project 2 – Differential Drive Robot with LiDAR</h4>
    <p>
      This project demonstrates a complete mobile robot stack using a 
      <strong>differential drive platform</strong> equipped with a 2D LiDAR sensor.
    </p>

    <h5>System Architecture</h5>
    <ul>
      <li><strong>Simulation Environment:</strong> Gazebo world with obstacles and test arena</li>
      <li><strong>Robot Model:</strong> Two-wheeled diff-drive base with caster wheel</li>
      <li><strong>Sensor Suite:</strong> 360° scanning LiDAR (ray sensor)</li>
      <li><strong>ROS2 Bridge:</strong> <code>ros_gz_bridge</code> for Gazebo ↔ ROS2 communication</li>
    </ul>

    <div class="popup-image-gallery">
      <img src="images/projects/gazebo_lidar.png" alt="Diff-drive robot setup in Gazebo" class="popup-image">
      <p class="img-caption">fig.4) Differential drive robot configuration in Gazebo with LiDAR sensor.</p>
    </div>

    <h5>Control & Teleoperation</h5>
    <p>
      Robot motion is commanded through the <code>/cmd_vel</code> topic using 
      <code>geometry_msgs/Twist</code> messages. Two control methods were implemented:
    </p>
    <ul>
      <li><strong>Manual Command:</strong> Direct topic publishing for testing specific velocities</li>
      <li><strong>Keyboard Teleoperation:</strong> <code>teleop_twist_keyboard</code> node 
      for intuitive WASD-style control with dynamic speed adjustment</li>
    </ul>

    <h5>LiDAR Integration</h5>
    <p>
      The simulated LiDAR publishes <code>sensor_msgs/LaserScan</code> messages containing:
    </p>
    <ul>
      <li>Range measurements (distance to obstacles)</li>
      <li>Angular resolution and field of view</li>
      <li>Intensity values (when applicable)</li>
    </ul>

    <p>
      A ROS2 bridge node remaps the Gazebo transport topic <code>/lidar2</code> to 
      <code>/laser_scan</code> for compatibility with navigation stacks:
    </p>
    <code style="display:block; background:#1a1a1a; padding:10px; margin:10px 0; border-radius:4px;">
      ros2 run ros_gz_bridge parameter_bridge /lidar2@sensor_msgs/msg/LaserScan[ignition.msgs.LaserScan 
      --ros-args -r /lidar2:=/laser_scan
    </code>

    <div class="popup-image-gallery">
      <video class="popup-video" controls loop muted playsinline>
        <source src="images/projects/lidar-simple.mp4" type="video/mp4">
      </video>
      <p class="img-caption">fig.5) Real-time LiDAR visualization in RViz showing obstacle detection 
      as the robot navigates the environment.</p>
    </div>

    <h4 class="popup-section-title">Project 3 – SLAM & Autonomous Navigation</h4>
    <p>
      Building on the LiDAR-equipped robot, this project implements autonomous navigation using 
      <strong>Nav2</strong> (Navigation2 stack) and <strong>slam_toolbox</strong> for 
      real-time mapping and localization.
    </p>

    <h5>SLAM Configuration</h5>
    <p>
      The <code>slam_toolbox</code> package was configured in <strong>online async mode</strong> 
      for continuous map building during navigation. Key parameters tuned:
    </p>
    <ul>
      <li><strong>Loop Closure:</strong> Enabled to reduce drift in long trajectories</li>
      <li><strong>Resolution:</strong> 0.05m grid cells for balance between detail and performance</li>
      <li><strong>Scan Matching:</strong> Correlation-based alignment with outlier rejection</li>
    </ul>

    <h5>Navigation Stack Setup</h5>
    <p>
      The Nav2 stack provides a complete autonomous navigation solution with:
    </p>
    <ul>
      <li><strong>Global Planner:</strong> A* pathfinding for optimal routes</li>
      <li><strong>Recovery Behaviors:</strong> Backup, spin, wait strategies when stuck</li>
      <li><strong>Costmap Layers:</strong> Static (map), obstacle, inflation zones</li>
    </ul>

    <h5>Mapping Process</h5>
    <p>
      The robot was teleoperated through the Turtlebot3 test world to generate an occupancy grid map:
    </p>
    <ol>
      <li>Launch Gazebo simulation with <code>use_sim_time:=True</code></li>
      <li>Start Nav2 navigation stack</li>
      <li>Initialize slam_toolbox for real-time SLAM</li>
      <li>Launch RViz with Nav2 default configuration</li>
      <li>Teleoperate robot to explore environment</li>
      <li>Save map using <code>map_saver_cli</code> generating .pgm/.yaml files</li>
    </ol>

    <div class="popup-image-gallery">
      <img src="images/projects/turtlebot_slam.png" alt="SLAM mapping result in RViz" class="popup-image">
      <p class="img-caption">fig.6) Generated occupancy grid map showing free space (white), 
      obstacles (black), and unexplored areas (grey). TF frames and LaserScan overlay visible.</p>
    </div>

    <h5>Map Structure</h5>
    <p>
      The saved map consists of:
    </p>
    <ul>
      <li><strong>.pgm file:</strong> Grayscale image where pixel intensity represents occupancy probability 
      (0=free, 255=occupied, 205=unknown)</li>
      <li><strong>.yaml metadata:</strong> Resolution, origin coordinates, thresholds for 
      occupied/free classification</li>
    </ul>

    <h5>Localization & Navigation</h5>
    <p>
      Once the map is generated, Nav2's <strong>AMCL (Adaptive Monte Carlo Localization)</strong> 
      enables the robot to:
    </p>
    <ul>
      <li>Estimate its pose within the known map using particle filtering</li>
      <li>Accept goal poses from RViz (2D Goal Pose tool)</li>
      <li>Autonomously plan and execute collision-free paths</li>
      <li>Replan dynamically when encountering new obstacles</li>
    </ul>

    <h4 class="popup-section-title">Future Extensions</h4>
    <ul>
      <li><strong>3D SLAM:</strong> Integration of depth cameras for volumetric mapping</li>
      <li><strong>Multi-Robot Systems:</strong> Distributed SLAM with robot swarms</li>
      <li><strong>GPS Fusion:</strong> Combining indoor SLAM with outdoor GPS navigation</li>
      <li><strong>Behavior Trees:</strong> Advanced mission planning with ROS2 BehaviorTree.CPP</li>
      <li><strong>Hardware Deployment:</strong> Transition from simulation to physical robot platforms</li>
    </ul>

    <h4 class="popup-section-title">Technologies & Tools</h4>
    <ul>
      <li><strong>ROS2 Humble:</strong> Core middleware (rclpy, rclcpp)</li>
      <li><strong>Gazebo Classic:</strong> Physics simulation with ODE engine</li>
      <li><strong>URDF/SDF:</strong> Robot description and world modeling</li>
      <li><strong>slam_toolbox:</strong> Graph-based SLAM implementation</li>
      <li><strong>Nav2:</strong> Complete navigation stack (planners, controllers, recovery)</li>
      <li><strong>RViz2:</strong> 3D visualization of TF, sensors, planning results</li>
      <li><strong>ros_gz_bridge:</strong> Gazebo-ROS2 transport layer</li>
      <li><strong>TF2:</strong> Coordinate frame transformations</li>
    </ul>

    <h4 class="popup-section-title">Key Learnings</h4>
    <ul>
      <li>URDF/SDF conversion and Gazebo plugin architecture</li>
      <li>Sensor simulation (cameras, LiDAR, IMU) and ROS2 integration</li>
      <li>Coordinate frame management with TF2 for complex kinematic chains</li>
      <li>Occupancy grid mapping algorithms and probabilistic robotics</li>
      <li>Path planning algorithms (A*, DWA) and cost function tuning</li>
      <li>ROS2 launch system for complex multi-node configurations</li>
    </ul>

    <h4 class="popup-section-title">References</h4>
    <p>
      This work builds upon official ROS2/Gazebo documentation and tutorials from:
    </p>
    <ul>
      <li>Articulated Robotics (URDF/Gazebo integration tutorials)</li>
      <li>ROS2 Official Documentation (Nav2, slam_toolbox)</li>
      <li>Gazebo Classic documentation (plugins, sensors)</li>
    </ul>
  `,

  };
  const formationDetails = {
  ros_eth: `
    <h3>Programming for Robotics – ROS</h3>
    <p><strong>Institution:</strong> ETH Zurich</p>

    <h4 class="popup-section-title">Abstract</h4>
    <p>
      This course provides an introduction to the <strong>Robot Operating System (ROS2)</strong>
      and its most commonly used tools in robotics. Through practical examples, it offers
      a solid foundation for working with robotic systems, from simulation to real hardware.
    </p>

    <h4 class="popup-section-title">Objectives</h4>
    <ul>
      <li>ROS2 architecture: nodes, topics, messages, services, parameters, actions</li>
      <li>Console tools for debugging and system analysis</li>
      <li>Creating ROS packages and launch files</li>
      <li>ROS2 C++ client library (<strong>rclcpp</strong>)</li>
      <li>Simulation with <strong>Gazebo</strong> and robot modeling (URDF / SDF)</li>
      <li>Visualization tools: <strong>RViz</strong> and <strong>rqt</strong></li>
      <li>Advanced concepts: TF, time handling, rosbag</li>
    </ul>

    <h4 class="popup-section-title">Content</h4>
    <p>
      The course is based on a guided tutorial with exercises of increasing difficulty.
      It covers the full setup of an autonomous robotic system using ROS2, including
      sensor integration, actuator control, and the implementation of first
      closed-loop control algorithms.
    </p>
  `
  };
 //----------------------------------------------------------------
  // ✅ Crée un seul vrai MODAL (compatible avec ton CSS)
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <div id="modal-body"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalBody = modal.querySelector("#modal-body");
  const closeBtn = modal.querySelector(".close");

  // ✅ Ouvrir un projet (afficher le modal)
  projectItems.forEach(item => {
    item.addEventListener("click", () => {
      const key = item.dataset.project;
      modalBody.innerHTML = `<div class="popup-text">${projectDetails[key]}</div>`;
      modal.classList.add("show");
      document.body.style.overflow = "hidden"; // bloque le scroll du fond
    });
  });

  // ✅ Fermer le pop-up
  const closeModal = () => {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  };

  closeBtn.addEventListener("click", closeModal);

  // Fermer si clic à l’extérieur du contenu
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Fermer avec la touche Échap
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
 //----------------------------------------------------------------
  // Gestion du message caché -------------------------------------
  const hiddenMessage = document.getElementById("hiddenMessage");
  const hiddenPopup = document.getElementById("hiddenPopup");
  const closePopup = document.querySelector(".close-popup");

  hiddenMessage.addEventListener("click", () => {
    hiddenPopup.style.display = "flex";
  });

  closePopup.addEventListener("click", () => {
    hiddenPopup.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === hiddenPopup) {
      hiddenPopup.style.display = "none";
    }
  });

  // ----------------------------------------------------------------
  // Formation modal handling
  const formationButtons = document.querySelectorAll(".formation-btn");

  formationButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.formation;
      modalBody.innerHTML = `<div class="popup-text">${formationDetails[key]}</div>`;
      modal.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  });
 //----------------------------------------------------------------
});
