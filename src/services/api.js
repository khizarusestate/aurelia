const API_BASE_URL = 'https://aurelia-server.vercel.app/api';

export const api = {
  async sendBookingRequest(bookingData) {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to send booking request');
      }
      
      return result;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  async getRooms() {
    try {
      const response = await fetch(`${API_BASE_URL}/rooms`);
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch rooms');
      }
      
      return result;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  async getRoom(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/rooms?id=${id}`);
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch room');
      }
      
      return result;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  async subscribeToNewsletter(email) {
    try {
      const response = await fetch(`${API_BASE_URL}/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to subscribe to newsletter');
      }
      
      return result;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
};
