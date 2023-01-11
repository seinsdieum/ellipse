
/*function writeData(logging, data) {
    if(logging) {
        logData.writeFile('../info.txt', `user login attempt: ${data}`, (err) => {
            if(err) throw err;
        })
    } else {
        logData.writeFile('../info.txt', `user register attempt: ${data}`, (err) => {
            if(err) throw err;
        })
    }
}*/

function signForm(register) {
    const regForm = document.createElement('form')
    regForm.className = 'sign-form'

    const nickname = document.createElement('input')
    nickname.type = 'text'
    nickname.placeholder = 'Nickname'
    nickname.name = 'nickname'
    const email = document.createElement('input')
    email.type = 'text'
    email.placeholder = 'Email'
    email.name = 'email'
    const password = document.createElement('input')
    password.type = 'password'
    password.placeholder = 'Password'
    password.name = 'pass'

    const rePassword = document.createElement('input')
    rePassword.type = 'password'
    rePassword.placeholder = 'Repeat password'
    rePassword.name = 'repass'

    const submitButton = document.createElement('button')
    submitButton.className = 'article-navigation'
    submitButton.style.width = '60%'
    submitButton.style.alignSelf = 'center'
    submitButton.style.marginTop = '0.8em'

    regForm.appendChild(nickname)
    regForm.appendChild(password)
    if(register) {
        regForm.appendChild(nickname)
        regForm.appendChild(email)
        regForm.appendChild(password)
        regForm.appendChild(rePassword)
        submitButton.append('sign up')
        submitButton.addEventListener('mouseenter', () => {
            const data = new FormData(regForm)
            console.log(data)
        })
    } else {
        regForm.appendChild(nickname)
        regForm.appendChild(password)
        submitButton.append('sign in')
        submitButton.addEventListener('mouseenter', () => {
            const data = new FormData(regForm)
            console.log(data)
        })
    }
    regForm.appendChild(submitButton)
    return regForm
}
function addSignMenuItems() {
    const signUpButton = underlineButton('up', false)
    const signInButton = underlineButton('in', false)
    const bntLst = {signInButton, signUpButton}

    const signInText = 'Sign In'
    const signUpText = 'Sign Up'

    const menuList = buttonList(false, bntLst)
    const row1 = row();
    const row1_2 = row();
    const row2 = row();

    const regSignText = document.createElement('h1')
    regSignText.append('Sign In')


    const regSignForm = signForm(true)
    const authSignForm = signForm(false)

    row1.appendChild(menuList)
    row2.appendChild(authSignForm)
    row1_2.appendChild(regSignText)

    function switchForm(item) {
        let currentForm = sign.querySelector('form.sign-form');
        if (!(currentForm === item)) {
            switchHiding()
            currentForm.replaceWith(item)
            show(item)
        }
    }

    if(sign.firstChild === null) {
        sign.appendChild(row1)
        sign.appendChild(rowLine())
        sign.appendChild(row1_2)
        sign.appendChild(row2)
        selectButton(signInButton)
    }

    signInButton.addEventListener('mouseenter', () => {
        deselectButton()
        switchForm(authSignForm)
        selectButton(signInButton)
        regSignText.innerText = signInText
    })

    signUpButton.addEventListener('mouseenter', () => {
        deselectButton()
        switchForm(regSignForm)
        selectButton(signUpButton)
        regSignText.innerText = signUpText
    })
}

signButton[0].addEventListener('mouseover', addSignMenuItems)