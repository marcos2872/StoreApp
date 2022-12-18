export type vehicleType = {
    "description": {
      "Color": string;
      "Make": string;
      "Model": string;
      "Odometer": string;
      "Price": string;
      "Variant": string;
      "Year": string;
    };
    "features": {
      "Air Conditioner": boolean;
      "Anti Lock Braking System": boolean;
      "Automatic Climate Control": boolean;
      "Driver Airbag": boolean;
      "Fog Lights - Front": boolean;
      "Passenger Airbag": boolean;
      "Power Steering": boolean;
      "Power Windows Front": boolean;
      "Wheel Covers": boolean;
    };
    "id": string;
    "images": string[];
    "specifications": {
      "Body Type": string;
      "Boot Space (Litres)": string;
      "Drive Type": string;
      "Engine Type": string;
      "Fuel Tank Capacity": string;
      "Fuel Type": string;
      "Gear Box": string;
      "Max Power": string;
      "Max Torque": string;
      "No. of cylinder": string;
      "Seating Capacity": string;
      "Transmission Type": string;
    };
}