import React from 'react'
import ReactDOM from 'react-dom/client'
import CvApp from './CvApp'
import { BrowserRouter } from 'react-router-dom'

const logExtraData = () => {
  const text = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣯⠲⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣏⢧⠀⠛⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡗⡞⡆⠀⠈⠛⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⢡⢻⡄⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⢥⢊⢷⡈⠔⠠⠐⢆⣩⢢⡀⢀⣿⣦⡀⠀⣤⠀⠀⠀⢀⣀⣤⢴⡶⡻⣍⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢎⡱⢊⠗⣌⠣⡜⣨⠑⣎⠹⣲⠿⣯⠻⡾⣟⣧⣴⡞⣯⢻⡜⣧⢻⣵⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣏⠲⣄⣀⠀⠀⠀⠀⠀⢸⡘⢆⡫⠜⣤⠳⣘⠤⣋⠴⠃⠇⠙⠄⠓⠑⠢⠒⠦⡙⢬⠫⡝⢾⣣⣯⣤⢤⣤⣴⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠸⣿⡻⢟⠧⣠⠘⠻⢄⡀⠀⠀⠀⡿⡘⢤⡛⣄⡇⠃⢀⠀⠀⡀⠀⠀⠄⡀⢀⠃⠘⠀⠣⡘⢇⠻⡄⢇⡛⠿⣼⣼⠃⣀⣀⠀⣀⡀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⠀⠀
⠀⢈⣳⢩⠒⡭⢲⡀⠀⠈⠓⢤⣀⡷⣩⡶⡛⣥⠀⠀⠀⠀⢀⠀⠀⠁⢂⠐⠠⠀⠀⠌⠐⠈⡌⠓⡜⢣⢍⠳⣌⠯⡱⣄⠈⠉⠁⠉⠁⢈⠀⠁⢀⠀⢀⠀⣄⣤⠶⣻⠟⠁
⠀⠛⠲⢧⡹⣐⢣⠹⢦⡀⢦⡘⣼⡿⣋⠴⢛⡁⠀⠠⠁⢀⠠⠀⠌⠀⠀⠠⠁⠀⠂⢀⠁⠂⢌⠱⣈⠇⣎⠳⣌⠳⡱⡌⠖⡄⠂⠌⡐⠠⢀⣂⣤⠖⡞⣹⢣⡾⠋⠀⠀⠀
⠀⠀⠀⠈⢳⡱⣊⢕⢪⡙⢮⠳⣉⠖⣡⡾⠋⠀⢰⡀⠀⠠⠀⠀⠀⢀⠀⠁⠠⠐⠀⢂⠈⡐⡈⠔⣌⠚⣤⠛⣌⢳⠱⡸⢱⢈⡡⠤⢖⡻⢍⠳⣌⠳⣜⠗⠋⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⢳⡱⣊⢦⡙⣌⢣⠕⣪⠑⢦⡑⢲⡬⣇⠠⠐⠀⠁⢀⠀⡀⠌⠐⡀⢁⠂⢄⢠⡑⢎⡔⣫⢔⡫⣜⡡⢇⡳⡱⢪⢕⡋⢦⢣⡙⢖⣬⠟⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢻⡜⣶⣋⢦⠓⡎⢥⠛⡤⢭⠋⠀⢸⡄⠀⠌⡐⢀⠂⠄⡈⠄⡐⠠⢌⢢⠦⣙⢦⡹⢔⠮⡱⢦⠹⡜⢲⠍⣇⠞⣌⢣⢲⡽⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣹⠳⡜⢦⠛⣜⢢⡛⢬⡏⡀⠀⠀⢿⣆⠰⣈⢦⣐⠠⣐⠢⣜⡱⢎⡣⢞⡡⢖⡍⣎⣳⡽⣌⠳⣉⢧⢚⣼⡚⣴⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⢇⡻⢌⠧⡛⣼⡧⢜⡡⣇⠁⢀⠀⢾⣏⢧⡙⢦⣃⠯⣔⢫⡔⠣⣜⠱⣣⣙⡦⠟⠉⣷⡱⣌⢣⢣⢎⡣⢞⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡼⢠⠙⣎⢳⡹⢴⠻⣎⠵⣙⠦⣅⡓⠀⠸⣶⡙⢦⢃⡞⢬⠲⣌⠓⣬⡷⠛⠉⠀⠠⢀⡷⡳⣌⠇⡞⣰⠹⣌⣯⢛⡳⣒⢖⡲⣒⠖⣦⠤⠤⢀⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡏⠤⡙⡌⢧⡹⢾⠀⠈⠷⣎⡹⡜⣭⢛⠿⡽⡜⣣⢣⠞⣡⢳⡼⠛⠹⠃⠀⠀⠠⢡⡼⢳⡱⢪⡙⣖⣡⠓⣼⢧⢫⠴⣩⠎⡵⣸⢘⡴⢋⡽⠻⠤⣀⠀⠀
⠀⠀⠀⠀⠀⠀⣟⠰⢠⡙⢮⢵⣻⡄⠀⢠⠋⠳⢽⣰⢋⢮⡱⢎⡵⢪⡙⣖⢫⠗⣤⣀⣀⣀⣄⣶⠫⡝⣣⡕⣣⠝⡴⣊⡝⢦⣋⢎⢧⡑⢮⠱⢎⡱⢎⡵⢊⡟⠛⠉⠀⠀
⠀⠀⠀⠀⠀⠀⣏⠲⣁⢾⣩⣞⠶⣷⡀⡎⠀⠀⠀⠉⡛⠲⠽⣎⣜⢧⣙⢦⣋⠾⡰⢭⡹⣙⢞⡰⢫⣴⣟⡱⢣⢏⠶⡱⢎⡳⡜⣎⠶⣙⢦⢛⣬⡳⠗⠛⠳⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣯⢳⡰⢊⡷⣯⢿⣹⣟⣧⠀⠀⠀⢠⠃⠀⠀⠀⠈⠉⠙⠲⠛⠚⠽⠷⠓⡟⠚⠋⣩⡟⣴⢫⡝⣮⢳⣝⣻⡵⣹⣬⣳⠽⠚⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣴⣿⡧⡽⣭⣻⣽⣯⢷⣻⣞⣷⣦⡀⡼⠀⠀⠀⠀⠀⠀⢀⡇⠀⠀⠀⠀⢰⠁⢀⣼⢧⣻⣜⣧⢿⣼⣳⢾⠟⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣸⢿⣿⣷⡝⣾⣷⣿⣿⣿⣿⣽⣾⣟⣿⣷⣦⣤⣀⡀⠀⠀⢸⠀⠀⠀⠀⢀⣮⣶⣿⣽⣯⣷⢿⣞⣿⢾⣽⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⡓⣞⡿⣿⣳⣿⡿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⡿⣟⣾⣯⣷⣿⣿⣯⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣷⠙⣦⢻⣽⣿⢻⣽⣿⣿⡟⣿⣯⣿⣿⣾⣿⣿⢻⣽⣿⣿⣷⣿⣯⣿⣿⣽⣿⣿⢻⣽⣿⣽⣾⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠸⣷⣊⠶⣭⢻⣿⣿⣯⣷⣿⣿⣿⡿⣿⣿⢿⣻⣿⣿⣿⣿⣿⣻⣿⢿⡽⢏⡳⢬⢣⣓⢮⡻⢿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠙⢿⣾⣼⣿⣳⣿⣿⣯⡷⣿⡷⣿⣿⢿⣿⣿⣿⢿⣿⣻⣿⣿⢯⡛⣜⢣⡝⣎⢳⢬⠳⣝⢯⡿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⢻⣷⣿⣷⣿⣿⠛⢷⣻⡽⣯⢿⣿⡾⣿⡿⣟⣿⡿⣞⣯⢳⣌⢳⡜⡬⢓⢮⣹⡞⡿⣜⡷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠟⢿⡏⠙⠀⠀⠈⠙⠿⢿⣾⣟⣿⣽⣿⣻⣽⡻⣜⢯⣲⢯⡛⣴⢻⣋⠷⣩⢓⡎⡗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⢿⣿⠏⠉⠙⢯⢎⡳⢎⣵⣏⣶⣯⢒⠥⣋⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⠏⠀⠀⠀⠈⢧⡝⣾⣿⣿⣿⣿⣾⣿⡼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣳⡿⣞⡿⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠛⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
Hi! it's good to see you here, your investment in my skills will be worth it.`
  console.log(text);
}

logExtraData();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CvApp />
    </BrowserRouter>
  </React.StrictMode>,
)
