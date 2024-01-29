import './post.css'
import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

function Post({ titulo, imagem, conteudo }) {
    const [isLiked, setIsLiked] = useState(false)
    const [likes, setLikes] = useState(15)

    function handleLike() {
        if (isLiked) {
            setLikes(likes - 1)
        } else {
            setLikes(likes + 1)
        }

        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <h1 className="header">{titulo}</h1>
            <img src={imagem} alt={titulo} />
            <p className="content">{conteudo}</p>
            <div className='curtidas'>
                <span>{likes} curtidas</span>
                { isLiked ? (
                    <FaHeart onClick={handleLike} />
                ): (
                    <FaRegHeart onClick={handleLike} />
                )}
            </div>
        </div>
    )
}

export default Post