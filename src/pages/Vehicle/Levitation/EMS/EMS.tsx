import { NumericMeasurement } from "common";
import { EMUnits } from "../EMUnits/EMUnits";
import { ImageTag } from "../ImageTag/ImageTag";
import emsUrl from "assets/images/EMS.png";

const mockMeas: NumericMeasurement = {
    id: "m1",
    name: "Meas 1",
    safeRange: [10, 20],
    type: "uint8",
    units: "A",
    value: { average: 12, last: 12 },
    warningRange: [10, 20],
};

const IMAGE_WIDTH = "7rem";

export const EMS = () => {
    return (
        <EMUnits
            title="EMS Units"
            body="The EMS are electromagnets that keep Kénos centered laterally."
            units={[
                <ImageTag
                    imageUrl={emsUrl}
                    measurement={mockMeas}
                    width={IMAGE_WIDTH}
                />,
                <ImageTag
                    imageUrl={emsUrl}
                    measurement={mockMeas}
                    width={IMAGE_WIDTH}
                />,
                <ImageTag
                    imageUrl={emsUrl}
                    measurement={mockMeas}
                    width={IMAGE_WIDTH}
                />,
                <ImageTag
                    imageUrl={emsUrl}
                    measurement={mockMeas}
                    width={IMAGE_WIDTH}
                />,
            ]}
        />
    );
};
