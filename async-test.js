<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title></title>
</head>

<body>
  <script type="text/javascript">
    // function fetchAlbums() {
    //   fetch('https://rallycoding.herokuapp.com/api/music_albums')
    //     .then(data => data.json())
    //     .then(json => console.log(json));
    // }
    const fetchAlbums = async () => {
      const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
      const json = await res.json();

      console.log(json);
    }
    fetchAlbums();
  </script>
</body>

</html>