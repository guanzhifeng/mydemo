export default {
    setNickName(state)
    {
        state.chackk = !state.chackk;
        state.nickname = state.chackk ? '李四' : '张三';
    }
}