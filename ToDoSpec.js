describe('Testing the functionality, this is the checklist', ()=>{
    it('should add an item', ()=>{
        let todo = new ToDo();
        let item = {
            tittle: "get milk",
            complete:false
        }
        const done = todo.addTodo(item)
        expect(todo.getItems().length).toBe(1);
    })
})