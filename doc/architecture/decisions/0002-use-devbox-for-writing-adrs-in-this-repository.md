# 2. Use Devbox for writing ADRs in this Repository

Date: 2024-10-01

## Status

Accepted

## Context

In the ongoing evolution of our software development practices, there is a growing need for a lightweight, efficient, and flexible development environment to support seamless integration of Architectural Decision Records (ADRs). ADRs are essential for documenting key architectural decisions and ensuring clarity and traceability in the project's development lifecycle. While DevContainers have been an established approach for managing development environments, there are alternatives like Devbox that can offer a lighter and more flexible solution, especially for specific use cases like ADR management.

## Decision

We have decided to use **Devbox** as the environment manager to facilitate the integration and use of ADRs within our repository. This decision is driven by the desire for a more lightweight, Nix-based, and developer-friendly environment that can easily be shared and reproduced across the team without the overhead of containerized environments like DevContainers.

## Key Reasons

1. **Lightweight Development Environment:**

   DevContainers rely on Docker, which means every development environment must run inside a container. While this provides isolation, it also introduces overhead in terms of resource consumption (e.g., disk space and CPU). Devbox, on the other hand, is a lighter solution as it doesn’t rely on containers by default but uses **Nix** for environment management. This reduces the need for additional infrastructure, making it faster and less resource-intensive to set up and use, especially when focusing on lightweight tasks such as managing ADRs.

2. **Simpler Setup and Usage:**

   Devbox offers a **simplified setup** compared to DevContainers. With DevContainers, developers need to manage Docker configurations, write `.devcontainer` configurations, and ensure the correct versions of Docker and VSCode are installed. Devbox, being based on Nix, allows for a **single configuration file (`devbox.json`)** that defines the packages and dependencies required. This can be easily shared across the repository, and any developer can quickly spin up the required environment with a simple `devbox shell` command.

3. **Declarative and Reproducible Environments:**

   Devbox, being based on Nix, follows a **declarative approach**, meaning that the environment is defined once and can be consistently reproduced by any team member. This is critical when working with ADRs, as ensuring everyone has the same environment is key to avoiding discrepancies in how tools or scripts are run. Nix's declarative nature ensures that package versions and configurations remain consistent across all machines, which is a strong advantage over DevContainers, where differences in container versions or host system setups can introduce variability.

4. **ADRs as Code:**

   ADRs are meant to be lightweight, text-based records that document decisions. Devbox aligns with this philosophy by being a **lightweight tool** that integrates easily with version control systems like Git without requiring complex infrastructure. With Devbox, developers can run the ADR tools, scripts, or linters in a minimal environment that doesn’t burden the repository with large configuration files or container setups.

5. **Nix Integration:**

   Devbox's reliance on Nix is one of its major strengths. **Nix** is a powerful package manager that allows for precise control over package dependencies, ensuring that every tool required to manage ADRs is exactly as defined. This helps in managing tools like `adr-tools` or custom ADR scripts that may have specific dependency requirements. By using Nix, we benefit from **Nix’s package isolation and reproducibility**, reducing dependency conflicts and ensuring that ADR management tools work seamlessly across different systems.

6. **Flexibility and Modularity:**

   Devbox supports **modular environments**, meaning that it can be configured to only include the specific tools required for ADR management without bloating the environment with unnecessary packages. This makes it easy to extend the environment as needed while keeping it lean. DevContainers, while powerful, tend to bundle more than is necessary due to the nature of containerized environments, leading to slower build times and potentially larger images.

## Consequences

1. **Faster ADR Management:** By using Devbox, we can expect faster setup and teardown times for development environments, specifically for ADR-related tasks, since there is no need to spin up Docker containers.

2. **Consistency Across Environments:** Devbox ensures consistent environments across all developers through its Nix integration, reducing the chances of "it works on my machine" problems when working with ADRs.

3. **Lower Overhead:** Without the need for Docker, the resource overhead is significantly reduced, leading to a more streamlined workflow.

4. **Easier Collaboration:** The lightweight nature of Devbox makes it easier to share configurations within the team, ensuring everyone can contribute to ADRs without needing heavy infrastructure.

5. **Transition from DevContainers:** If the team is already using DevContainers, there will be a small learning curve to adopt Devbox. However, given Devbox's simplicity and the benefits of using Nix, the transition should be relatively straightforward.

## Decision Summary

Devbox has been chosen as the environment manager for enabling ADRs within our repository because it provides a lightweight, reproducible, and efficient alternative to DevContainers. By leveraging Nix, it ensures consistency and minimal overhead, making it ideal for ADR management and other lightweight development tasks.

