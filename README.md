1. หลังจากทำการ clone หรือ download มาแล้วให้ทำการเปิดด้วย visual studio code 
2. ทำการพิม npm i เพื่อติดตั้ง module ทั้งหมด 
3. เข้าไปเปลี่ยน API_KEY ที่ Pages/Home.js ให้เป็น API_KEY ของตัวเอง 
4. npm start เพื่อเริ่มใช้งาน

ฟังก์ชันที่ทำเสร็จ
* ค้นหาชื่อของภาพยนต์
* เมื่อทำการการปิดเว็บไซต์ และ มีการเปิดขึ้นมาใหม่สินค้าที่เคยเลือกไปจะยังคงอยู่ในตะกร้าสินค้า
* สามารถเลือกสินค้าใส่ตะกร้าได้
* สามารถกด Clear ตะกร้าสินค้าได้
* เมื่อกดสั่งซื้อสินค้าแล้วให้มี Popup show ว่าต้องโอนเงินไปที่ไหน ภายในระยะเวลา 1 นาที (แสดงตัวเลขเวลาในการนับถอยหลังด้วย)
 
ฟังก์ชันที่ทำไม่เสร็จ
* สามารถเพิ่มราคาของหนังแต่ละเรื่อง
* เมื่อซื้อหนังมากกว่า 3 รายการลด 10%, มากกว่า 5 รายการลด 20% (ในส่วนนี้กำหนดให้ไม่ว่าจะซื้อหนังกี่เรื่องก็ราคา 100 เอาไว้สามารถลดราคาได้แต่ก็ถือว่าไม่เสร็จ)




_____________________________________________________________________________________________________________________________________________________________
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
