import { useState } from 'react';

import { Scanner } from '@yudiel/react-qr-scanner';
import { toast } from '../libs/toast';


const styles = {
    container: {
        width: '80%',
        maxWidth: 500,
        margin: 'auto'
    },
    controls: {
        marginBottom: 8
    }
};

export const Scan = () => {
    // const [deviceId, setDeviceId] = useState<string | undefined>(undefined);
    // const [tracker, setTracker] = useState<string | undefined>('centerText');

    const [pause, setPause] = useState(false);

    // const devices = useDevices();

    // function getTracker() {
    //     switch (tracker) {
    //         case 'outline':
    //             return outline;
    //         case 'boundingBox':
    //             return boundingBox;
    //         case 'centerText':
    //             return centerText;
    //         default:
    //             return undefined;
    //     }
    // }

    return (
        <div style={styles.container}>
            <button style={{ marginBottom: 5 }} onClick={() => setPause((val) => !val)}>
                {pause ? 'Pause Off' : 'Pause On'}
            </button>
            <div style={styles.controls}>
                {/* <select onChange={(e) => setDeviceId(e.target.value)}>
                    <option value={undefined}>Select a device</option>
                    {devices.map((device, index) => (
                        <option key={index} value={device.deviceId}>
                            {device.label}
                        </option>
                    ))}
                </select> */}
                {/* <select style={{ marginLeft: 5 }} onChange={(e) => setTracker(e.target.value)}>
                    <option value='centerText'>Center Text</option>
                    <option value='outline'>Outline</option>
                    <option value='boundingBox'>Bounding Box</option>
                    <option value={undefined}>No Tracker</option>
                </select> */}
            </div>
            <Scanner
                // {...args}
                formats={[
                    'qr_code',
                    'micro_qr_code',
                    // 'rm_qr_code',
                    // 'maxi_code',
                    // 'pdf417',
                    // 'aztec',
                    // 'data_matrix',
                    // 'matrix_codes',
                    // 'dx_film_edge',
                    // 'databar',
                    // 'databar_expanded',
                    // 'codabar',
                    // 'code_39',
                    // 'code_93',
                    // 'code_128',
                    // 'ean_8',
                    // 'ean_13',
                    // 'itf',
                    // 'linear_codes',
                    // 'upc_a',
                    // 'upc_e'
                ]}
                // constraints={{
                //     deviceId: deviceId
                // }}
                
                onScan={(detectedCodes) => {
                  toast(detectedCodes[0].rawValue)
                  console.log(detectedCodes[0].rawValue)
                    // action('onScan')(detectedCodes);
                }}
                // onError={(error) => {
                //     console.log(`onError: ${error}'`);
                // }}
                components={{
                    // onOff: true,
                    // torch: true,
                    // zoom: true,
                    // finder: true,
                    // tracker: getTracker()
                }}
                // sound={true}
                allowMultiple={true}
                // scanDelay={2000}
                paused={pause}
            />
        </div>
    );
}

// // export const Scanner = Template.bind({});

// // // // @ts-ignore
// // // Scanner.args = {};

// // // export default {
// // //     title: 'Scanner'
// // // };

// import QrScanner from "qr-scanner"
// import { useEffect } from "react"
// import { $ } from "../helpers/documentId"
// export const Scan = () => {
// //     import QrScanner from "qr-scanner";
//     useEffect(()=>{
//         const video =  $("scanqr") as unknown as HTMLVideoElement
//     new QrScanner(
//        video, res => console.log(res), {}
//     ) 
//     }, [])
// // const videoElement = document.getElementById("qr-video");
// // const qrScanner = new QrScanner(videoElement, result => console.log("QR Code:", result));
// // qrScanner.start();

//     return (
//         <video className="w-24 h-24" id="scanqr"></video>
//     )
// }