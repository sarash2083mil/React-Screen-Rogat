import './DevicesTree.css';
import React, { useState, useCallback } from 'react';
import Checkbox from '@mui/material/Checkbox';

const DevicesTree = ({ devicesData, onDeviceSelect }) => {
  const [selectedDevices, setSelectedDevices] = useState([]);

  const handleCheckboxChange = useCallback((event, isChecked, device) => {
    setSelectedDevices((prevSelectedDevices) => {
      const updatedSelectedDevices = [...prevSelectedDevices];
      const index = updatedSelectedDevices.indexOf(device.id);
      if (isChecked) {
        if (index === -1) {
          updatedSelectedDevices.push(device.id);
        }
        // Recursively select child devices
        if (device.children) {
          device.children.forEach((child) => {
            updatedSelectedDevices.push(child.id);
           handleCheckboxChange("change", isChecked, child);
          });
        }
      } else {
        if (index !== -1) {
          updatedSelectedDevices.splice(index, 1);
        }
        // Recursively deselect child devices
        if (device.children) {
          device.children.forEach((child) => {
            const childIndex = updatedSelectedDevices.indexOf(child.id);
            if (childIndex !== -1) {
              updatedSelectedDevices.splice(childIndex, 1);
            }
          });
        }
      }
      onDeviceSelect(device, isChecked);
      return updatedSelectedDevices;
    });
  }, [onDeviceSelect]);

  const renderTree = (devices) => (
    <ul>
      {devices.map((device) => (
        <li key={device.id}>
          <Checkbox
            checked={selectedDevices.includes(device.id)}
            onChange={(event) => handleCheckboxChange(event, event.target.checked, device)}
            aria-label={`Select device ${device.name}`}
          />
          <span>{device.name}</span>
          {device.children && renderTree(device.children)}
        </li>
      ))}
    </ul>
  );

  return (
    <div class="devices-tree">
      <h3>Devices Tree</h3>
      {renderTree(devicesData.devices)}
    </div>
  );
};

export default DevicesTree;