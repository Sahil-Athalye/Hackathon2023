

<script setup>

import OpenAI from "openai";
import {ref} from 'vue'

let resp = ref("")

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
});

resp.value = chatCompletion.choices[0].message.content

</script>


<template>
    {{resp}}
</template>

<style> 
</style>