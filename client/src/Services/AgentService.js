export default {

    getAgents: () => {
        return fetch('user/agents')
            .then(response => {
                if (response.status !== 401) {
                    return response.json().then(data => data);
                }
                else
                    return { message: { msgBody: "Unauthorized" }, msgError: true };
            });
    },

    postAgent: agent => {
        return fetch('/user/agent', {
            method: 'post',
            body: JSON.stringify(agent),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status !== 401) {
                return response.json().then(data => data);
            }
            else
                return { message: { msgBody: 'Unauthorized' }, msgError: true }
        });
    }

}