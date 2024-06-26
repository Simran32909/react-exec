const user={
    name:"Shih-Tzu Singh Sandral",
    imageUrl:"https://puppiezo.com/wp-content/uploads/2023/06/IMG_1820.jpeg",
    imageSize:130,
};

export default function Profile(){
    return (
      <>
          <strong>{user.name}</strong>
          <img
              className="profile-image"
              src={user.imageUrl}
              alt={"Photo of "+user.name}
              style={{
                  width:user.imageSize+"px",
                  height:user.imageSize+"px",
                  borderRadius:user.imageSize/2+"px",
              }}
          />
      </>
    );
}