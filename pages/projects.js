import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>My Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>My Projects</h1>

        <section>
          <h2 className={styles.yearHeading}>2024</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <h2>Espresso Machine</h2>
              <p>
                Rescued and restored a Gaggia Baby Twin espresso machine. Learned about electronics, pump systems, and
                schematics while disassembling, cleaning, and rebuilding. Consulted with specialists for replacement
                parts. Currently mastering the art of pulling the perfect espresso shot.
              </p>
            </div>
            <div className={styles.projectCard}>
              <h2>Virtual Machine</h2>
              <p>
                Leveraged Proxmox VE to create an isolated cybersecurity lab environment. Deployed and configured
                multiple virtual machines including Kali Linux for penetration testing and vulnerable targets like OWASP
                Juice Shop and Metasploitable2. This setup enables hands-on experience with vulnerability assessment,
                penetration testing, and security hardening in a controlled environment.
              </p>
            </div>
            <div className={styles.projectCard}>
              <h2>Set up service with domain</h2>
              <div className={styles.servicesList}>
                <ul>
                  <li>
                    <span className={styles.serviceName}>PhotoPrism</span> - Photo Management
                  </li>
                  <li>
                    <span className={styles.serviceName}>Nextcloud</span> - File Hosting
                  </li>
                  <li>
                    <span className={styles.serviceName}>CommaFeed</span> - RSS Reader
                  </li>
                  <li>
                    <span className={styles.serviceName}>Home Assistant</span> - Home Automation
                  </li>
                  <li>
                    <span className={styles.serviceName}>Node-RED</span> - Flow Automation
                  </li>
                  <li>
                    <span className={styles.serviceName}>n8n</span> - Workflow Automation
                  </li>
                  <li>
                    <span className={styles.serviceName}>ntfy</span> - Push Notifications
                  </li>
                  <li>
                    <span className={styles.serviceName}>Trilium Notes</span> - Note Taking
                  </li>
                  <li>
                    <span className={styles.serviceName}>Vaultwarden</span> - Password Manager
                  </li>
                  <li>
                    <span className={styles.serviceName}>Vikunja</span> - Task Management
                  </li>
                  <li>
                    <span className={styles.serviceName}>Tandoor</span> - Recipe Manager
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.projectCard}>
              <h2>Tailscale & Nginx Proxy</h2>
              <p>
                Implemented a secure remote access solution by configuring Tailscale VPN and Nginx Proxy Manager. Set up
                a CloudFlare-managed domain for external access to self-hosted services. The Tailscale mesh network
                provides encrypted connections between devices, while Nginx Proxy Manager handles reverse proxy, SSL
                termination, and access control. This setup enables secure remote access to Proxmox and other services
                without exposing ports directly to the internet.
              </p>
            </div>
            <div className={styles.projectCard}>
              <h2>Pihole</h2>
              <p>
                Implemented a network-wide ad-blocking and DNS sinkhole solution using Pi-hole. Initially deployed on a
                Raspberry Pi 4, then migrated to a lightweight LXC container running in Proxmox for better resource
                utilization. Configured custom DNS filtering lists, implemented DoH (DNS over HTTPS) using Cloudflared
                for encrypted upstream DNS queries, and set up gravity lists for enhanced privacy and security. The
                migration to LXC involved setting up Docker within the container, managing persistent storage volumes,
                and configuring network interfaces for optimal performance. This setup blocks ads and trackers across
                all network devices while providing detailed analytics on DNS queries and blocked domains.
              </p>
            </div>
            <div className={styles.projectCard}>
              <h2>Proxmox Cluster</h2>
              <p>
                Built a homelab cluster using three repurposed laptops: a personal laptop, a family laptop, and a
                recovered WindowsXP machine. Performed security assessment and data wiping on the recovered system
                before repurposing. Installed Proxmox VE on all nodes and configured them into a high-availability
                cluster. Set up web-based management interface for centralized control of virtual machines and
                containers across all nodes, enabling efficient resource utilization and workload distribution.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className={styles.yearHeading}>2023</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <h2>BadUSB</h2>
              <p>Set up a simple BadUSB using rasberpi zero. It used P4wnP1_aloa as the firmware.</p>
            </div>
            <div className={styles.projectCard}>
              <h2>Backend-Summer Intership</h2>
              <p>Description of project 1</p>
            </div>
            <div className={styles.projectCard}>
              <h2>MineCraft Server</h2>
              <p>Description of project 1</p>
            </div>
            <div className={styles.projectCard}>
              <h2>CasaOS Self Host</h2>
              <p>Description of project 1</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
