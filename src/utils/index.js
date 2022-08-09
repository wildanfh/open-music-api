const mapDBToModel = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  album_id,
}) => ({
  id,
  title,
  year: parseInt(year),
  genre,
  performer,
  duration: parseInt(duration),
  albumId : album_id,
});

const mapDBToModelAlbum = ({
  id,
  name,
  year,
}) => ({
  id,
  name,
  year: parseInt(year),
})

module.exports = { mapDBToModel, mapDBToModelAlbum };