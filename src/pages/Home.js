import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, Platform } from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handleAddNewSkill() {
        setMySkills(oldSkills => [...oldSkills, newSkill]);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome, Andrade</Text>

            <TextInput style={styles.input} placeholder='New skill' placeholderTextColor={"#555"} onChangeText={setNewSkill} />

            <Button onPress={handleAddNewSkill} />

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>

            {mySkills.map(skill => (
                <SkillCard key={skill} skill={skill} />
            ))}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30,

    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1e25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    },
})