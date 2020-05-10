'use strict'

/**
 * 장난감
 */
class Toy {
    /**
     * 할일 목록
     */
    todoList = ['할일1', '할일2', '할일3', '할일4', '할일5']; 
    
    /** 
     * 셀렉트 박스
     */
    selBox = document.getElementById("selBox");

    localDB = { };

    /**
     * 생성자 이다.
     */
    constructor() { 
        this.init();
    }
    
    /**
     * 초기화 함수
     */
    init() {
        // 시간을 설정한다.
        document.getElementById("clock").innerHTML = new Date().toLocaleString();
    
        this.selectOptionAdd();
    }
    
    /**
     * 셀렉트 박스 옵션을 추가한다.
     */
    selectOptionAdd() {
        this.todoList.forEach(todo => {
            let createOption = document.createElement("option");       
            
            createOption.text = todo;
            createOption.value = todo;
            selBox.options.add(createOption);
        });
    }
}

new Toy();