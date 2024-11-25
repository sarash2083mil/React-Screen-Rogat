import DevicesTree from "../DevicesTree/DevicesTree";
import Navigation from "../navigationBar/Navigation";
import Table from "../Table/Table";
import meterData from "../jsons/meters.json";
import devicesData from "../jsons/devicesData.json";
import React, { useState, useEffect } from "react";


const MainScreen = () => {

  const [meters, setMeters] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null); // Or initial device
  //more then one device supposed to be chosen at a tim

  useEffect(() => {
    setMeters(meterData);
  }, []); // Empty dependency array to run only once

  const handleDeviceSelect = (device, isChecked) => {
    setSelectedDevice(device);
    console.log(meterData);

    if (device) {
      if (device.meterIds) {
        const filteredMeters = meterData.filter((meter) => isChecked ? device.meterIds.includes(meter.meterId) : !device.meterIds.includes(meter.meterId));
        setMeters(filteredMeters);
      }
      else if (device.children) {
        device.children.map(d => {
          handleDeviceSelect(d);
        })

      }

    } else {
      // Handle no device selected case (optional)
    }
  };

  return (<>
    <div class="content-zone">
      <DevicesTree onDeviceSelect={handleDeviceSelect} devicesData={devicesData} />
      <Table data={meters} />
    </div >

  </>);


}
export default MainScreen;