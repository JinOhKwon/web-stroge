
'use strict'

/**
 * 장난감
 */
class Toy {
    /**
     * 위도?
     *
     * @memberof Toy
     */
    lat;

    /**
     * 위도?
     *
     * @memberof Toy
     */
    lon;

	/**
	 * http 객체
	 *
	 * @memberof Toy
	 */
	xhr = new XMLHttpRequest();

    /**
     * 할일 목록
     */
    todoList = ['할일1', '할일2', '할일3', '할일4', '할일5']; 
    
    /** 
     * 셀렉트 박스
     */
    selBox = document.getElementById("selBox");

    /**
     * 현재 내가 살고 있는 위치
     *
     * @memberof Toy
     */
    showPosition = document.getElementById("location");;

    /**
     * 브라우저 스토리지
     *
     * @memberof Toy
     */
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
		this.getWheater();
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

	/**
	 * 날씨 정보를 반환한다.
	 *
	 * @memberof Toy
	 */
	getWheater() {
		let xhr = this.xhr;

		navigator.geolocation.getCurrentPosition(
            (position) => {
				xhr.open("GET" , encodeURI(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=a919a4bf349195df98ceccad8a61105c`) , true);
				xhr.onreadystatechange = () => {
					if(xhr.readyState == 4 && xhr.status == 200) {
						console.log(JSON.parse(xhr.responseText));
					}
				}
				xhr.send();
            },
		);
	}	
}

new Toy();