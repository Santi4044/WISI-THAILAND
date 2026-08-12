export const productTypes = [
  {
    slug: "falcon",
    name: "Falcon",
    color: "#004874",
    image: "/images/products/falcon.png",
    description: "Compact video headend with flexible transmodulation for CATV and IP distribution.",

    // --- new fields for the detail page ---
    range: "GF Product Range",
    tagline: "Compact Video Headend",
    heroImage: "/images/products/falcon.png",
    intro:
      "The new FALCON headend product range features generally recognised and established WISI signal processing technology, used across new and future-proof model versions and adaptable to specific market needs through flexible configurations.",

    features: [
      "Transmodulation of 6/12 input channels to 16 DVB-C/T output channels or 256 SPTS streams",
      "Choice of models with DVB-S/S2 and/or DVB-T/T2/C input tuner",
      "Integrated switching matrix and DiSEqC 1.0 control",
      "Multiplexing at the input (of the CI) and output",
      "Up to eight CI interfaces",
      "Models without or up to 8 CI slots",
      "Up to 2 USB interfaces for media-player applications",
      "LCN/NIT table processing",
      "Hotel mode with PID remapping",
      "Channel list over SAP or as M3U data for the streamer models",
      "Straightforward, intuitive programming via a web browser",
      "DHCP server functionality",
      "Test output socket (-20 dB) for interruption-free measurements",
      "Built-in high-efficiency switching power supply unit",
    ],

    sections: [
      {
        heading: "Flexible transmodulation, built to scale",
        body:
          "Transmodulation of up to 12 satellite transponders (DVB-S/S2), terrestrial DVB-T/T2, or CATV DVB-C receiver channels to up to 16 DVB-C or DVB-T output channels, or up to 256 SPTS IP streams.",
      },
      {
        heading: "Integrated switching matrix",
        body:
          "The integrated switching matrix makes it simple to assign connected polarisation levels to each receiver tuner, removing the need for additional external devices — saving space, material costs, and installation time.",
      },
      {
        heading: "Efficient CAM usage",
        body:
          "Models with CI slots can be equipped with up to eight CAM modules for central decryption. Multiplexing at the input of the CI interfaces ensures CAM capacity is used effectively, so programmes from different satellite transponders or terrestrial channels can be combined into a single module.",
      },
      {
        heading: "Output-side multiplexing",
        body:
          "Additional multiplexing at the output allows channels to be processed in any combination of programmes, within the bandwidth and data rate limits of the applicable broadcast standard — DVB-C or DVB-T.",
      },
      {
        heading: "IP streaming",
        body:
          "IP-streamer models can process up to 256 SPTS streams as UDP/RTP unicast or multicast. Channel lists are generated via SAP protocol or M3U data depending on the connected IP receiver devices. External content, such as video sequences, can be added via the USB ports.",
      },
    ],
  },
  {
    slug: 'tangram',
    name: 'Tangram',
    description: 'Modular headend systems designed for flexibility and scalability in any installation.',
    color: '#00385E',
    image: "/images/products/tangram.png",

    features: [
      "Supports linear DVB and IP sources as well as non-linear streaming protocols",
      "Encryption/decryption options including Pro:Idiom, Samsung LYNK, Philips VSecure, Widevine, BISS, Verimatrix",
      "Combine up to 6 modules (plus 1 controller) depending on application requirements",
      "Low power consumption with AC or DC power supply",
      "Two SFP+ and two 10 GigE ports",
      "Hot-swappable modules, fans and power supplies",
      "N+1 module, power source and power supply redundancy",
    ],

    sections: [
      {
        heading: "Tangram – The Video Bridge",
        body:
          "The new generation of our Tangram video platform allows for not only increased performance, but also creates a bridge between your non-linear sources to linear content networks. Equipped with 10G interconnects, ABR stream reception, DRM decryption and enhanced security and management options, Tangram takes you to the next phase.",
      },
      {
        heading: "Modular platform for Edge and Central Office",
        body:
          "Tangram is built for both centralised and distributed headend architectures. Use it in CO, for DVB-IP gateway processing, descrambling, remuxing, scrambling and modulation. In distributed networks, at the Edge, it enables local modulation and remodulation over IP and streaming protocols and supports QAM, COFDM*, PAL and FM outputs.",
      },
      {
        heading: "Enhanced security, cost & space",
        body:
          "Replace multiple racks of legacy equipment with a single, multifunctional platform. Tangram helps reduce power, cooling and space requirements while increasing processing density and flexibility.",
      },
      {
        heading: "Intuitive management",
        body:
          "Configure and monitor with REST API or through a user-friendly web interface, SNMP or CLI.",
      },
      {
        heading: "Security",
        body:
          "Enhanced access control, user authentication, upload certificate, TACACS+",
      },
    ],
  },
  {
    slug: 'chameleon',
    name: 'Chameleon',
    description: 'Versatile signal processing equipment adaptable to a wide range of broadcast environments.',
    color: '#004874',
    image: "/images/products/chameleon.png",

    features: [
      "One hardware for all applications",
      "Flexibility through software applications",
      "Scalability in function and installation size",
      "Excellent performance, suitable for large network operator",
      "Receive: DVB-S/S2/S2X/T/T2/ISDB-T, 8VSB, QAM, SRT, ASI and/or IP",
      "Output: analog, DVB-T, DTMB, FM, SDI, QAM, ASI, SRT and/or IP",
      "Encode HDMI, HD/SD-SDI and A/V inputs to IP digital outputs",
      "Decode MPEG 2/4 SD or HD into SDI",
    ],

    sections: [
      {
        heading: "Software based channel processing",
        body:
          "The integrated components can adapt their function depending on requirements. They are designed for all current and future applications. Suited for the transition from the analogue to the digital world as well as the connection between HFC- and IP distribution platforms.",
      },
      {
        heading: "Connect Various Video Services",
        body:
          "Experience an ideal solution for smaller networks & low-density applications to connect between analog to digital or RF to IP environments.",
      },
      {
        heading: "Utilize a Modular Solution",
        body:
          "Enable versatility by mixing and matching modules for different applications within 1RU",
      },
      {
        heading: "Universal Headend for any Application",
        body:
          "The headend system Chameleon provides the user with universal applications. The Chameleon modules are fully flexible configurable via software. This concept is unprecedented in the international market. Among the Chameleon software components are: DVB receivers for different signal paths, transmodulators, Edge QAM, MPEG-4 decoder, IP and ASI streamer and remultiplexer.",
      },
      {
        heading: "Connect Directly with Broadcaster Sites",
        body:
          "Receive streams from broadcaster sites via GigE or ASI, with optional RTP + FEC. Output as Analog, SDI, QAM, ASI, SRT and/or IP. Encode HDMI, HD/SD-SDI and A/V inputs to IP digital outputs",
      },
      {
        heading: "Stream Local Content",
        body:
          "Engage with the community by streaming local content programming using HDMI, HD-SDI or A/V video sources.",
      },
      {
        heading: "Extensible License Options",
        body:
          "The Chameleon’s license options enable flexible configuration for inputs and outputs, with options for FEC, multiplexing, encryption, and decryption.",
      },
      {
        heading: "Navigate a User-Friendly UI",
        body:
          "Easily configure and manage the Chameleon from any device with user-friendly web UI.  Remote control via web interface, SNMP monitoring and control. ",
      },
      {
        heading: "Experience Professional Support",
        body:
          "With our quality development and strong technical support, you can relax and enjoy reliable operation.",
      },
    ],
  },
  {
    slug: 'optopus',
    name: 'Optopus',
    description: 'Advanced fibre optic and IP solutions for modern network infrastructures.',
    color: '#00385E',
    image: "/images/products/optopus.png",

    features: [
      "Full modular concept allows every applications mix",
      "Reduced maintenance time by module replacement during operation",
      "Passive backplate reduces maintenance outages",
      "Dust-free passive cooling prolongs module lifetime",
      "Advanced management features for easy installation and operation",
      "Integrated WDM filters in the modules save space, money and time",
      "Redundant power supplies guarantee system availability",
    ],

    sections: [
      {
        heading: "Fit more in less space and reduce operational costs",
        body:
          "The Optopus platform needs less space compared to other products. The 14 slots of the LX 50 base unit can be fully equipped with high-density dual transmitters, allowing 28 different downstream segments from one single chassis. In turn, this reduces the cost of deployment, sparing and rack space lease. Combined with an extremely low power consumption, the Optopus has very low operational costs.",
      },
      {
        heading: "Reduce outages caused by maintenance",
        body:
          "The cooling and ventilation system of the Optopus is designed to prolong the operating lifetime of the modules. For instance, the equipment uses a passive cooling without active fans or ventilation holes in the modules. Also, the passive backplate system allows for exchange of modules during operation without re-cabling. The system thereby significantly reduces maintenance outages.",
      },
      {
        heading: "Flexibility, easy management and monitoring",
        body:
          "The modular concept of the Optopus platform allows for every possible application combination in a single system. Not only does the system offer comprehensive local and remote monitoring features for each module, but supervision and operation is also realised using state-of-the-art SNMP features and/or a web interface.",
      },
    ],
  },
]