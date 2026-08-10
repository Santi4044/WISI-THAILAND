export const productTypes = [
  {
    slug: "falcon",
    name: "Falcon",
    color: "#004874",
    image: "/src/app/_components/main_product_images/falcon.png",
    description: "Compact video headend with flexible transmodulation for CATV and IP distribution.",

    // --- new fields for the detail page ---
    range: "GF Product Range",
    tagline: "Compact Video Headend",
    heroImage: "/images/products/falcon-hero.png",
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
    image: "/src/app/_components/main_product_images/tangram.png",

    features: [

    ],
  },
  {
    slug: 'chameleon',
    name: 'Chameleon',
    description: 'Versatile signal processing equipment adaptable to a wide range of broadcast environments.',
    color: '#004874',
    image: "/src/app/_components/main_product_images/chameleon.png",

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
  },
  {
    slug: 'optopus',
    name: 'Optopus',
    description: 'Advanced fibre optic and IP solutions for modern network infrastructures.',
    color: '#00385E',
    image: "/src/app/_components/main_product_images/optopus.png",
  },
]
