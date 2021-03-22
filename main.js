let $btn = document.querySelectorAll('.questions section article button'),
    $answer = document.querySelectorAll('.questions section article input'),
    $arr = ["Лелека", "Ставок", "Чайник", "Торт", "Вогонь", "Цукерка", "Зошит", "Вікно", "Хліб", "Свічка"],
    $ques_section = document.querySelectorAll('.questions section article:nth-of-type(1)'),
    $answer_section = document.querySelectorAll('.questions section article:nth-of-type(2)'),
    $true_img = document.querySelectorAll('.true'),
    $false_img = document.querySelectorAll('.false')
for (let i = 0; i < $btn.length; i++) {
    $btn[i].addEventListener('click', () => {
        ($answer[i].value).trim().toLowerCase() == $arr[i].toLowerCase() ? true_answer(i) : false_answer(i)    
    })
}

function true_answer(i){
    $ques_section[i].style.backgroundColor = 'green'
    $ques_section[i].style.color = 'white'
    $btn[i].style.display = 'none'
    $answer[i].style.display = 'none'
    $true_img[i].style.display = 'block'

}
function false_answer(i){
    $ques_section[i].style.backgroundColor = 'red'
    $ques_section[i].style.color = 'white'
    $btn[i].style.display = 'none'
    $answer[i].style.display = 'none'
    $false_img[i].style.display = 'block'

}

    // if (($answer[i].value).trim().toLowerCase() == $arr[i].toLowerCase()) {
        //     true_answer(i)
        // } else {
        //     false_answer(i)
        // }