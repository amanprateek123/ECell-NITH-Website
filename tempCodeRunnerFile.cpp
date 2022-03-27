#include<iostream>
using namespace std;

class Node {
public:
    int data;
    Node *next;
};

Node *push(int x, Node *head) {
    Node *newNode = new Node;
    newNode->data = x;
    newNode->next = head;
    head = newNode;
    return head;
}

Node *pop(Node *head) {
    if (head == nullptr) return head;
    Node *thead = head;
    head = head->next;
    delete thead;
    return head;
}

int top(Node *head) {
    if (head == nullptr) return -1;
    return head->data;
}

void print(Node *head) {
    cout << "Stack contains: ";
    while (head != nullptr) {
        cout << head->data << " ";
        head = head->next;
    }
    cout << '\n';
}

int main() {

    Node *head = nullptr;

    head = push(9, head);
    head = push(4, head);

    print(head);


    head = pop(head);
    cout << "Top: " << top(head) << '\n';
    head = push(17, head);
    head = push(24, head);

    print(head);

    return 0;

}