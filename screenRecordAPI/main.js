const start = async () => {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: {
      mediaSource: "screen",
    },
  });

  const data = [];
  let end;

  const mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = (e) => {
    const url = "http://localhost:3000/record"; // Replace with your server URL
    const chunk = e.data;
    data.push(e.data);

    // to convert the blob to strings
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onloadend = function () {
      let string = reader.result;
      // console.log(string);

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Modify the content type if needed
        },
        body: JSON.stringify({ chunk: window.btoa(string) }),
      })
        .then((response) => response.json())
        .then((responseData) => {
          end = responseData.success;
          // console.log("Response Data:", responseData);
        })
        .catch((error) => {
          console.error("Fetch Error:", error);
        });
    };
  };

  mediaRecorder.start(1000);

  mediaRecorder.onstop = (e) => {
    // console.log("stopped", window.btoa(end));
    console.log(
      "url",
      URL.createObjectURL(new Blob(data, { type: data[0].type }))
    );
    document.querySelector("video").src = URL.createObjectURL(
      new Blob(data, { type: data[0].type })
    );
  };
};

start();
