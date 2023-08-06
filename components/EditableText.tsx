import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";

export default function EditAbleText({ onSave, ...props }: Text['props'] & { onSave?: (edited: string) => void }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.children);

  const startEditing = () => {
    setIsEditing(true);
  };

  const saveEditedText = () => {
    setIsEditing(false);
    if (onSave) onSave!(editedText ? editedText.toString() : "")
  };

  return (

    <View className="flex-1">
      {isEditing ? (
        <View className="flex-row items-center">
          <TextInput
            className={props.className}
            value={editedText?.toString()}
            onChangeText={setEditedText}
            autoFocus
          />
          <TouchableOpacity onPress={saveEditedText}>
            <MaterialIcons name="save" size={25} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={startEditing}>
          <Text {...props} />
        </TouchableOpacity>
      )}
    </View>
  )
}