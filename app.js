const cursor = document.querySelector(".circle-cursor");
      const shadow = document.querySelector(".cursor-shadow");

      document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        cursor.style.transform = `translate(${x}px, ${y}px)`;
        shadow.style.transform = `translate(${x}px, ${y}px)`;
      });

      