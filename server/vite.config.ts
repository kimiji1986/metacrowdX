export default defineConfig({
    plugins: [vue()],
    bulid:{
        rollupOptions:{
            input:'client/pubic/index.htmal'
        }
    }
})