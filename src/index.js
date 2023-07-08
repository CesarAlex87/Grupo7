console.log(dataUsers);
dataUsers.contentCreators.map((creator) => {
  console.log(
    `Creador :${creator.username} \nCantidad de seguidores: ${creator.followers}`
  );
});
