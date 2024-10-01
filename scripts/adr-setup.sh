#!/bin/bash

# Ensure /usr/local/bin/adr directory exists
if [ ! -d "/usr/local/bin/adr" ]; then
    sudo mkdir -p /usr/local/bin/adr
    echo "Directory /usr/local/bin/adr created."
else
    echo "Directory /usr/local/bin/adr already exists."
fi

# Clone the adr-tools repository if not already cloned
if [ ! -d "/usr/local/bin/adr/.git" ]; then
    sudo git clone https://github.com/npryce/adr-tools.git /usr/local/bin/adr
    echo "adr-tools repository cloned."
else
    echo "adr-tools repository already cloned."
fi

# Add adr-tools to the PATH if not already present
# if ! echo "$PATH" | grep -q "/usr/local/bin/adr/src"; then
#     export PATH="$PATH:/usr/local/bin/adr/src"
#     # echo 'export PATH="$PATH:/usr/local/bin/adr/src"' >> ~/.bashrc
#     echo "adr-tools path added to PATH."
# else
#     echo "adr-tools path already in PATH."
# fi

# Ensure adr script is executable
if [ ! -x "/usr/local/bin/adr/src/adr" ]; then
    sudo chmod +x /usr/local/bin/adr/src/adr
    echo "adr script made executable."
else
    echo "adr script already executable."
fi
