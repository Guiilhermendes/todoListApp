import React, { useState } from "react";
import { 
    View,
    TouchableOpacity
} from "react-native";
import { styles } from "./styles";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Trash } from "../../assets/img/trash";

type Props = {
    description: string;
    onRemove: () => void;
    onComplete: (checked: boolean) => void;
}

export function Task({
    description,
    onRemove,
    onComplete
}: Props) {
    const [localChecked, setLocalChecked] = useState(false);

    return (
        <View style={styles.task}>
            <View style={styles.checkBox}>
                <BouncyCheckbox
                    size={24}
                    fillColor="#FCB80B"
                    unFillColor="#262626"
                    text={description}
                    iconStyle={{ borderColor: "#FCB80B" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    textStyle={{ fontFamily: "inter", color: localChecked ? '#808080' : '#FFF', fontSize: 14, textAlign: 'justify'}}
                    onPress={(checked: boolean) => {
                          setLocalChecked(!localChecked);
                          onComplete(checked)
                    }}
                    isChecked={localChecked}
                />
            </View>
            <TouchableOpacity 
                style={styles.trash}
                onPress={onRemove}
            >
                <Trash/>
            </TouchableOpacity>
        </View>
    )
}