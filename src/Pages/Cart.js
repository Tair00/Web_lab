
import React, { useState, useEffect } from 'react';
import API_BASE_URL from './config';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [bookId, setBookId] = useState('');
    const [quantity, setQuantity] = useState('');

    // Загрузка содержимого корзины
    useEffect(() => {
        // Реализуйте запрос к серверу для загрузки содержимого корзины
        // Пример использования fetch:
        fetch(`${API_BASE_URL}/cart/items`)
            .then(response => response.json())
            .then(data => setCartItems(data))
            .catch(error => console.error('Error:', error));
    }, []);

    // Добавление элемента в корзину
    const addToCart = () => {
        // Отправка POST-запроса на сервер для добавления в корзину
        // Пример использования fetch:
        fetch(`${API_BASE_URL}/cart/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                bookId: bookId,
                quantity: quantity,
            }),
        })
            .then(response => {
                // Обработка успешного добавления элемента в корзину
                // Обновление содержимого корзины
                // Пример: перезагрузка содержимого корзины после добавления
                fetch(`${API_BASE_URL}/cart/items`)
                    .then(response => response.json())
                    .then(data => setCartItems(data))
                    .catch(error => console.error('Error:', error));
            })
            .catch(error => console.error('Error:', error));
    };

    // Удаление элемента из корзины
    const removeFromCart = (bookId) => {
        // Отправка DELETE-запроса на сервер для удаления из корзины
        // Пример использования fetch:
        fetch(`${API_BASE_URL}/cart/remove?bookId=${bookId}`, {
            method: 'DELETE',
        })
            .then(response => {
                // Обработка успешного удаления элемента из корзины
                // Обновление содержимого корзины
                // Пример: перезагрузка содержимого корзины после удаления
                fetch(`${API_BASE_URL}/cart/items`)
                    .then(response => response.json())
                    .then(data => setCartItems(data))
                    .catch(error => console.error('Error:', error));
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>Cart Items</h1>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {cartItems.map(item => (
                    <tr key={item.book.id}>
                        <td>{item.book.title}</td>
                        <td>{item.quantity}</td>
                        <td>{item.book.price}</td>
                        <td>{item.quantity * item.book.price}</td>
                        <td>
                            <button onClick={() => removeFromCart(item.book.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div>
                <h2>Add Item to Cart</h2>
                <label>Book ID:</label>
                <input type="text" value={bookId} onChange={e => setBookId(e.target.value)} required /><br />
                <label>Quantity:</label>
                <input type="text" value={quantity} onChange={e => setQuantity(e.target.value)} required /><br />
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Cart;
