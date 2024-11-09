module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        header: '1300px',
        card: '670px',
        newsletter: '400px',
        
      },
      width: {
        logo: '150px',
        container: '1200px',
        large: '1440px', 
        email: '450px'
      },
      fontFamily: {
        heading: 'Poppins'
      },
      backgroundImage: {
        'gradient': 'linear-gradient(150deg, #EE00FF, #CC5BFE, #07B8FE, #CBF1FF)',
        'gray': 'linear-gradient(to bottom right, #5A5F6C, #0E1629)',
        'rose': 'linear-gradient(to bottom right, #D4899C, #040D21)'
      },
      backgroundColor: {
        'btnDark': '#0C233A',
        'btnLight': '#fff'
      },
      colors:{
        'blue': '#4B96FE',
        'midBlue': '#0466C8',
        'darkblue': "#040D21",
      }
    }
  },
  plugins: [],
}
