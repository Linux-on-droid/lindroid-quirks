#!/bin/bash

input_dir="/dev/input"

for device in $input_dir/event*; do
    event_number=$(basename $device)

    device_name=$(cat /sys/class/input/$event_number/device/name)
    
    if [[ ! $device_name == Lindroid* ]]; then
        mount --bind /dev/null $device
    fi
done
