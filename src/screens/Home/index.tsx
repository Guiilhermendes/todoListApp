import React, { useState } from "react";
import {
    Text,
    View,
    Alert,
    FlatList,
    TextInput,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { Task } from '../../components/Task'

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { Logo } from '../../assets/img/logo.jsx'
import { Plus } from '../../assets/img/plus.jsx'
import { Clipboard } from '../../assets/img/clipboard.jsx'

type TaskInfo = {
    id: string;
    description: string;
    completed: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<TaskInfo[]>([]);
    const [taskDescription, setTaskDescription] = useState("");
    const [createdTasks, setCreatedTasks] = useState(0);
    const [completedTasks, setCompletedTasks] = useState(0);

    function handleParticipantAdd() {
        if (!taskDescription.trim()) {
            return Alert.alert("Adicione uma descrição a sua tarefa");
        }

        const taskUncompleted = tasks.find(t => t.description == taskDescription && !t.completed);

        if (taskUncompleted) {
            return Alert.alert("Tarefa já registrada",`Já existe a tarefa "${taskDescription}" em sua lista e ela ainda não foi completada!`);
        }

        const newTask: TaskInfo = {
            id: uuidv4(),
            description: taskDescription,
            completed: false
        } 

        setTasks(prevState => [newTask, ...prevState]);
        setTaskDescription('');
        setCreatedTasks(createdTasks+1);
    }

    function handleTaskRemove(id: string) {
        Alert.alert("Remover tarefa","Tem certeza que deseja remover essa tarefa", [
          {
            text: "Sim",
            onPress: () => {
                setTasks(prevState => prevState.filter(t => t.id !== id));
                setCreatedTasks(createdTasks-1);
                if (tasks.find(t => t.id === id)?.completed) {
                    setCompletedTasks(completedTasks-1);
                }
            }
          },
          {
            text: "Não",
            style: "cancel"
          }
        ]);
    }

    function handleTaskComplete(id: string, checked: boolean) {
        const taskChangedIdx = tasks.findIndex(t => t.id === id);
        tasks[taskChangedIdx].completed = checked;
        setTasks(tasks);
        setCompletedTasks(checked ? completedTasks+1 : completedTasks-1);
    }

    return (
        <>
            <SafeAreaView style={styles.statusBarContainer}/>
            <SafeAreaView style={styles.safeContainer}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />

                <View style={styles.container}>
                    <Logo />

                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder='Adicione uma nova tarefa'
                            placeholderTextColor={'#808080'}
                            onChangeText={setTaskDescription}
                            value={taskDescription}
                        />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleParticipantAdd}
                        >
                            <Plus />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.downContainer}>
                    <View style={styles.tasks}>
                        <View style={styles.tasksInfo}>
                            <Text style={styles.createdText}>
                                {`Criadas     ${createdTasks}`}
                            </Text>
                            <Text style={styles.completedText}>
                                {`Concluídas     ${completedTasks}`}
                            </Text>
                        </View>
                        <FlatList
                            style={styles.list}
                            data={tasks}
                            keyExtractor={item => String(item.id)}
                            renderItem={({item}) => (
                                <Task
                                    key={item.id}
                                    description={item.description}
                                    onRemove={() => handleTaskRemove(item.id)}
                                    onComplete={(checked: boolean) => handleTaskComplete(item.id, checked)}
                                />
                            )}
                            showsVerticalScrollIndicator={false}
                            ListEmptyComponent={() => (
                                <View style={styles.listEmptyText}>
                                    <Clipboard/>
                                    <Text style={styles.emptyTitle}>Você ainda não tem tarefas cadastradas</Text>
                                    <Text style={styles.emptySubTitle}>Crie tarefas e organize seus itens a fazer</Text>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}