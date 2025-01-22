const projectsData = [
  {
    id: "home-assistant",
    title: "Home Assistant",
    year: 2024,
    short: "Home Assistant on Proxmox Virtual Machine and Zigbee Integration",
    description:
      "Set up a Home Assistant instance on a Raspberry Pi 4. Integrated smart home devices including lights, switches, sensors, and cameras. Configured automations, scripts, and dashboards for home monitoring and control. Learned YAML configuration, MQTT messaging, and Node-RED automation. This setup enables centralized management of smart home devices and custom automation routines.",
  },
  {
    id: "espresso-machine",
    title: "Espresso Machine",
    year: 2024,
    short: "Rescued and restored a Gaggia Baby Twin espresso machine",
    description:
      "Rescued and restored a Gaggia Baby Twin espresso machine. Learned about electronics, pump systems, and schematics while disassembling, cleaning, and rebuilding. Consulted with specialists for replacement parts. Currently mastering the art of pulling the perfect espresso shot.",
  },
  {
    id: "virtual-machine",
    title: "Virtual Machine",
    year: 2024,
    short: "Proxmox VE Cybersecurity",
    description:
      "Leveraged Proxmox VE to create an isolated cybersecurity lab environment. Deployed and configured multiple virtual machines including Kali Linux for penetration testing and vulnerable targets like OWASP Juice Shop and Metasploitable2. This setup enables hands-on experience with vulnerability assessment, penetration testing, and security hardening in a controlled environment.",
  },
  {
    id: "service-with-domain",
    title: "Set up service with domain",
    year: 2024,
    short: "Set up various services with a domain",
    description:
      "Set up various services with a domain, including PhotoPrism for photo management, Nextcloud for file hosting, and more. This setup allows for efficient management of personal data and services.",
    services: [
      { name: "PhotoPrism", description: "Photo Management" },
      { name: "Nextcloud", description: "File Hosting" },
      { name: "CommaFeed", description: "RSS Reader" },
      { name: "Home Assistant", description: "Home Automation" },
      { name: "Node-RED", description: "Flow Automation" },
      { name: "n8n", description: "Workflow Automation" },
      { name: "ntfy", description: "Push Notifications" },
      { name: "Trilium Notes", description: "Note Taking" },
      { name: "Vaultwarden", description: "Password Manager" },
      { name: "Vikunja", description: "Task Management" },
      { name: "Tandoor", description: "Recipe Manager" },
    ],
  },
  {
    id: "tailscale-nginx-proxy",
    title: "Tailscale & Nginx Proxy",
    year: 2024,
    short: "Secure Remote Access with Tailscale VPN and Nginx Proxy Manager",
    description:
      "Implemented a secure remote access solution by configuring Tailscale VPN and Nginx Proxy Manager. Set up a CloudFlare-managed domain for external access to self-hosted services. The Tailscale mesh network provides encrypted connections between devices, while Nginx Proxy Manager handles reverse proxy, SSL termination, and access control. This setup enables secure remote access to Proxmox and other services without exposing ports directly to the internet.",
  },
  {
    id: "pihole",
    title: "Pihole",
    year: 2024,
    short: "Network-wide Ad-blocking with Pi-hole",
    description:
      "Implemented a network-wide ad-blocking and DNS sinkhole solution using Pi-hole. Initially deployed on a Raspberry Pi 4, then migrated to a lightweight LXC container running in Proxmox for better resource utilization. Configured custom DNS filtering lists, implemented DoH (DNS over HTTPS) using Cloudflared for encrypted upstream DNS queries, and set up gravity lists for enhanced privacy and security. This setup blocks ads and trackers across all network devices while providing detailed analytics on DNS queries and blocked domains.",
  },
  {
    id: "proxmox-cluster",
    title: "Proxmox Cluster",
    year: 2024,
    short: "Homelab Cluster with Proxmox VE",
    description:
      "Built a homelab cluster using three repurposed laptops: a personal laptop, a family laptop, and a recovered WindowsXP machine. Performed security assessment and data wiping on the recovered system before repurposing. Installed Proxmox VE on all nodes and configured them into a high-availability cluster. Set up a web-based management interface for centralized control of virtual machines and containers across all nodes, enabling efficient resource utilization and workload distribution.",
  },
  {
    id: "badusb",
    title: "BadUSB",
    short: "BadUSB with Raspberry Pi Zero",
    year: 2023,
    description: "Set up a simple BadUSB using Raspberry Pi Zero. It used P4wnP1_aloa as the firmware.",
  },
  {
    id: "backend-summer-internship",
    title: "Backend-Summer Internship",
    short: "Backend Summer Internship with company",
    year: 2023,
    description: "Description of project 1.",
  },
  {
    id: "minecraft-server",
    title: "MineCraft Server",
    short: "MineCraft Server with on VasaOS",
    year: 2023,
    description: "Description of project 1.",
  },
  {
    id: "casaos-self-host",
    title: "CasaOS Self Host",
    short: "CasaOS Self Host on old laptop",
    year: 2023,
    description: "Description of project 1.",
  },
  {
    id: "thesis project",
    title: "Front End Thesis Project with company",
    short: "Generative tree based on json file with React and state management",
    year: 2022,
    description: "",
  },
  {
    id: "android prototype",
    title: "Android Prototype with truck driving company",
    short: "Android Prototype with truck driving company",
    year: 2022,
    description: "Description of project 1.",
  },
  {
    id: "First Web App",
    title: "Movie App with React Native and",
    short: "Movie App with React Native and",
    year: 2022,
    description: "Description of project 1.",
  },
];

export default projectsData;
