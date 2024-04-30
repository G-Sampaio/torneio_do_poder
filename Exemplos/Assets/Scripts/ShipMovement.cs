using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

public class ShipMovement : MonoBehaviour
{
    public float velocity1 = 1;
    public Rigidbody2D rb;

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        var horizontal = Input.GetAxis("Horizontal");
        var vertical = Input.GetAxis("Vertical");
        var vector = new Vector3(horizontal, vertical, 0);
        rb.velocity = vector * velocity1;
        print(rb);
        //transform.position += vector * velocity * Time.deltaTime;
        //rb.AddForce(vector*Time.deltaTime);





    }
}
