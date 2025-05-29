import pytest
from app import app

@pytest.fixture
def client():
    app.testing = True
    with app.test_client() as client:
        yield client

@pytest.mark.parametrize("url", [
    "/",
    "/api/materials",
    "/api/orders",
    "/api/inventory",
    "/api/rfid-tags",
    "/api/trucks",
    "/api/alarms",
])
def test_get_endpoints_success(client, url):
    response = client.get(url)
    assert response.status_code == 200
