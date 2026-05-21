export interface Initiative {
  id: string;
  name: string;
  tagline: string;
  description: string;
  focusAreas: string[];
}

export interface Principle {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

export interface WebsiteContent {
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  whyWeExist: {
    title: string;
    content: string[];
    quote: string;
  };
  initiatives: {
    title: string;
    list: Initiative[];
  };
  vision: {
    title: string;
    content: string[];
  };
  principles: {
    title: string;
    list: Principle[];
  };
  team: {
    title: string;
    list: TeamMember[];
  };
  contact: {
    title: string;
    content: string;
    email: string;
    linkedin: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}

export const SERAPH_DATA: WebsiteContent = {
  hero: {
    headline: "Protecting & Empowering Humanity in the Digital Age",
    subheadline: "SeraphGuard Labs is building technologies for the next era of humanity. Our mission is to create safer, ethical, and highly capable systems designed around human wellbeing and digital protection.",
    ctaPrimary: "Explore Our Work",
    ctaSecondary: "Contact Us",
  },
  whyWeExist: {
    title: "Why We Exist",
    content: [
      "Technology is evolving faster than humanity can adapt.",
      "While digital systems hold enormous potential, they introduce profound risks to privacy, safety, and human wellbeing.",
      "We believe innovation must be fundamentally ethical and human-centered."
    ],
    quote: "“The future needs systems intelligent enough to protect humanity.”",
  },
  initiatives: {
    title: "Our Initiatives",
    list: [
      {
        id: "guardian-ai",
        name: "Guardien AI",
        tagline: "AI-powered digital protection for children.",
        description: "An on-device AI system designed to protect and empower children in the digital age. Guardien AI helps safeguard young users from harmful content exposure, addictive platform behavior, online exploitation, predatory interactions, and emotional wellbeing risks — while preserving privacy through intelligent on-device processing.",
        focusAreas: [
          "Child digital safety",
          "Emotional wellbeing",
          "Anti-predatory protection",
          "Privacy-first AI",
          "Healthy digital development"
        ]
      },
      {
        id: "seraph-play",
        name: "SeraphPlay",
        tagline: "AI-driven wellness and movement experiences. (Coming soon)",
        description: "SeraphPlay combines artificial intelligence, movement, and interactive experiences to help people live healthier and more active lives. The platform transforms fitness and wellbeing into intelligent, immersive, and engaging experiences powered by motion and AI. (Coming soon)",
        focusAreas: [
          "Motion gaming",
          "AI fitness systems",
          "Health & wellbeing",
          "Interactive training",
          "Personalized experiences"
        ]
      },
      {
        id: "guardian-x",
        name: "GuardianX",
        tagline: "Intelligent protection for the connected world. (Coming soon)",
        description: "GuardianX is a digital protection platform focused on defending personal devices, identities, and digital environments from modern cyber and privacy threats. The platform combines intelligent defense systems with human-centered cybersecurity principles to create safer digital experiences. (Coming soon)",
        focusAreas: [
          "Device security",
          "Privacy protection",
          "Intelligent threat detection",
          "Secure digital infrastructure",
          "Human-centered cybersecurity"
        ]
      }
    ]
  },
  vision: {
    title: "Building the Infrastructure for Human Protection in the AI Era",
    content: [
      "Artificial intelligence will shape communication, learning, identity, and security.",
      "SeraphGuard Labs exists to help ensure this future evolves safely.",
      "We are building technologies designed to make the digital world more trustworthy and human-centered."
    ]
  },
  principles: {
    title: "Built on Principles",
    list: [
      {
        title: "Human First",
        description: "Technology should strengthen humanity, not exploit it."
      },
      {
        title: "Ethical by Design",
        description: "Safety, privacy, and responsibility must exist at the core of intelligent systems."
      },
      {
        title: "Protection Through Intelligence",
        description: "AI should proactively safeguard human wellbeing."
      },
      {
        title: "Privacy Matters",
        description: "Human dignity and privacy are foundational rights in the digital era."
      },
      {
        title: "Long-Term Thinking",
        description: "We build for future generations growing alongside intelligent systems."
      }
    ]
  },
  team: {
    title: "Team",
    list: [
      {
        name: "Nevin Robert",
        role: "Founder & Technology Operator",
        bio: "Entrepreneur and technology operator focused on building systems that protect and empower humanity in the digital age. Former Chief of Staff at Nosh Robotics with experience across venture capital, investment banking, and startup ecosystems."
      }
    ]
  },
  contact: {
    title: "Let’s Build Safer Digital Futures Together",
    content: "We’re open to partnerships, research collaborations, institutional engagement, and conversations around ethical AI and digital safety.",
    email: "hello@seraphguardlabs.com",
    linkedin: "SeraphGuard Labs"
  },
  footer: {
    tagline: "Building technologies that protect and empower humanity in the digital age.",
    copyright: "© 2026 SeraphGuard Labs. All rights reserved."
  }
};
