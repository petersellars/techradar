# 3. Move Rancher Desktop to Hold in Technology Radar

Date: 2024-10-01

## Status

Accepted

# ADR: Move Rancher Desktop to Hold in Technology Radar

## Context
Rancher Desktop has been a part of our development environment, providing a local Kubernetes cluster and container runtime for testing and deployment purposes. However, we have encountered a significant issue related to running GitHub Actions locally using the `act` tool, as documented in [this issue](https://github.com/rancher-sandbox/rancher-desktop/issues/2333). This limitation directly impacts our development workflow, where local pipeline execution is a crucial step.

The ability to run pipelines locally allows for quicker feedback, testing, and debugging without needing to push changes to a remote CI/CD system. This is particularly valuable when working on complex projects or collaborating with teams, as it speeds up development iterations. The `act` tool is widely used in our organization to simulate GitHub Actions locally, and its functionality is critical to our workflow.

## Decision
We are placing Rancher Desktop in the **Hold** category of our technology radar. This decision is based on the inability to run the `act` tool reliably in Rancher Desktop environments, which hinders our local development workflow. As running pipelines locally is a vital part of our process, this issue significantly impacts our productivity and efficiency.

## Consequences
- We will cease further integration of Rancher Desktop into our development process until this issue is resolved or a viable workaround is found.
- We will revert to using Docker Desktop that supports this local pipeline execution.
- We will continue monitoring the progress of the issue and may reconsider Rancher Desktop for adoption once the issue is resolved.

