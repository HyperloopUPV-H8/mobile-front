import { ImageTag } from "../ImageTag/ImageTag";
import hemsUrl from "assets/images/HEMS.png";
import { NumericMeasurement } from "common";
import { EMUnits } from "../EMUnits/EMUnits";

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

export const HEMS = () => {
    return (
        <EMUnits
            title="HEMS Units"
            body="The HEMS are electromagnets that lift Kénos of the ground."
            units={[
                <ImageTag
                    imageUrl={hemsUrl}
                    measurement={mockMeas}
                    width={IMAGE_WIDTH}
                />,
                <ImageTag
                    imageUrl={hemsUrl}
                    measurement={mockMeas}
                    width={IMAGE_WIDTH}
                />,
                <ImageTag
                    imageUrl={hemsUrl}
                    measurement={mockMeas}
                    width={IMAGE_WIDTH}
                />,
                <ImageTag
                    imageUrl={hemsUrl}
                    measurement={mockMeas}
                    width={IMAGE_WIDTH}
                />,
            ]}
        />
    );
};
